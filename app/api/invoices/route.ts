import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const invoiceId = searchParams.get('invoiceId')

  try {
    if (invoiceId) {
      const { data, error } = await supabase
        .from('invoices')
        .select(`
          *,
          orders (
            *,
            users (email, full_name)
          )
        `)
        .eq('id', invoiceId)
        .single()

      if (error) throw error
      return NextResponse.json(data)
    }

    if (userId) {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .in('order_id', (await supabase
          .from('orders')
          .select('id')
          .eq('user_id', userId)).data?.map((o: any) => o.id) || [])

      if (error) throw error
      return NextResponse.json(data)
    }

    return NextResponse.json(
      { error: 'userId or invoiceId required' },
      { status: 400 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch invoices' },
      { status: 500 }
    )
  }
}
