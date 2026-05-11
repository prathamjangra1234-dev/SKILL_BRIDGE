import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

// Auth functions
export async function signUp(email: string, password: string, fullName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  })
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getSession()
  return data?.session?.user
}

// Services functions
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
  return { data, error }
}

export async function getServiceById(id: string) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()
  return { data, error }
}

// Service packages functions
export async function getServicePackages(serviceId: string) {
  const { data, error } = await supabase
    .from('service_packages')
    .select('*')
    .eq('service_id', serviceId)
    .eq('is_active', true)
  return { data, error }
}

export async function getServicePackageById(id: string) {
  const { data, error } = await supabase
    .from('service_packages')
    .select('*')
    .eq('id', id)
    .single()
  return { data, error }
}

// Orders functions
export async function createOrder(
  userId: string,
  servicePackageId: string,
  total: number,
  tax: number = 0
) {
  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        user_id: userId,
        service_package_id: servicePackageId,
        subtotal: total - tax,
        tax,
        total,
        status: 'pending',
      },
    ])
    .select()
    .single()
  return { data, error }
}

export async function getUserOrders(userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      service_packages (
        *,
        services (*)
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  return { data, error }
}

export async function updateOrderStatus(orderId: string, status: string) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId)
    .select()
    .single()
  return { data, error }
}

// Invoices functions
export async function createInvoice(orderId: string, amountDue: number) {
  const invoiceNumber = `INV-${Date.now()}`
  const { data, error } = await supabase
    .from('invoices')
    .insert([
      {
        order_id: orderId,
        invoice_number: invoiceNumber,
        amount_due: amountDue,
        status: 'unpaid',
      },
    ])
    .select()
    .single()
  return { data, error }
}

export async function getInvoiceById(id: string) {
  const { data, error } = await supabase
    .from('invoices')
    .select(`
      *,
      orders (
        *,
        users (
          email,
          full_name
        )
      )
    `)
    .eq('id', id)
    .single()
  return { data, error }
}

export async function updateInvoiceStatus(invoiceId: string, status: string) {
  const { data, error } = await supabase
    .from('invoices')
    .update({ status })
    .eq('id', invoiceId)
    .select()
    .single()
  return { data, error }
}

// Team members functions
export async function getTeamMembers() {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  return { data, error }
}

export async function getTeamMemberById(id: string) {
  const { data, error } = await supabase
    .from('team_members')
    .select(`
      *,
      portfolio_projects (*)
    `)
    .eq('id', id)
    .single()
  return { data, error }
}

// Portfolio functions
export async function getPortfolioProjects() {
  const { data, error } = await supabase
    .from('portfolio_projects')
    .select(`
      *,
      team_members (name, role)
    `)
    .order('created_at', { ascending: false })
  return { data, error }
}

// User profile functions
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()
  return { data, error }
}
