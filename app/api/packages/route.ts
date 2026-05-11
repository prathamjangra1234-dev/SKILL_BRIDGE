import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const serviceId = searchParams.get('serviceId')
  const packageId = searchParams.get('packageId')

  try {
    if (packageId) {
      const { data, error } = await supabase
        .from('service_packages')
        .select('*')
        .eq('id', packageId)
        .single()
      
      if (error) throw error
      return NextResponse.json(data)
    }

    if (serviceId) {
      const { data, error } = await supabase
        .from('service_packages')
        .select('*')
        .eq('service_id', serviceId)
        .eq('is_active', true)
      
      if (error) throw error
      return NextResponse.json(data)
    }

    return NextResponse.json(
      { error: 'serviceId or packageId required' },
      { status: 400 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch packages' },
      { status: 500 }
    )
  }
}
