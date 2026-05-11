import { NextRequest, NextResponse } from 'next/server'
import { getServices, getServiceById } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  try {
    if (id) {
      const { data, error } = await getServiceById(id)
      if (error) throw error
      return NextResponse.json(data)
    }

    const { data, error } = await getServices()
    if (error) throw error
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
