import { supabaseAdmin } from '@/lib/supabase'

const services = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Web Development',
    description: 'Professional website development services tailored to your business needs',
    category: 'Web Development',
    base_price: 500,
    currency: 'USD',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading Times',
      'Modern Tech Stack'
    ],
    image_url: '/services/web-dev.jpg',
    is_active: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'Video Editing',
    description: 'Professional video editing for social media, YouTube, and promotional content',
    category: 'Video Editing',
    base_price: 300,
    currency: 'USD',
    features: [
      'Color Grading',
      'Motion Graphics',
      'Sound Design',
      'Multi-platform Format'
    ],
    image_url: '/services/video-edit.jpg',
    is_active: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'Graphic Design',
    description: 'Creative graphic design services for branding and marketing materials',
    category: 'Graphic Design',
    base_price: 250,
    currency: 'USD',
    features: [
      'Logo Design',
      'Branding Package',
      'Social Media Graphics',
      'Marketing Materials'
    ],
    image_url: '/services/graphic-design.jpg',
    is_active: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'Social Media Marketing',
    description: 'Strategic social media marketing to grow your online presence',
    category: 'Social Media',
    base_price: 400,
    currency: 'USD',
    features: [
      'Content Strategy',
      'Daily Posting',
      'Community Management',
      'Analytics & Reporting'
    ],
    image_url: '/services/social-media.jpg',
    is_active: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    name: 'Consulting Services',
    description: 'Expert consultation for your digital strategy and business needs',
    category: 'Consulting',
    base_price: 150,
    currency: 'USD',
    features: [
      'Strategy Session',
      'Technical Guidance',
      'Best Practices',
      'Actionable Roadmap'
    ],
    image_url: '/services/consulting.jpg',
    is_active: true
  }
]

const packages = [
  // Web Development Packages
  {
    service_id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Basic Website',
    description: 'Perfect for small businesses',
    price: 500,
    currency: 'USD',
    features: [
      '5 Pages',
      'Mobile Responsive',
      'Basic SEO',
      'Contact Form'
    ],
    delivery_days: 14,
    revisions: 2,
    is_active: true
  },
  {
    service_id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Standard Website',
    description: 'Ideal for growing businesses',
    price: 1500,
    currency: 'USD',
    features: [
      '10 Pages',
      'Advanced SEO',
      'Blog Section',
      'Analytics Integration',
      'Email Support'
    ],
    delivery_days: 21,
    revisions: 5,
    is_active: true
  },
  {
    service_id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Premium Website',
    description: 'Enterprise-grade website',
    price: 3000,
    currency: 'USD',
    features: [
      'Unlimited Pages',
      'E-Commerce Ready',
      'Advanced Integrations',
      'Priority Support',
      'Custom Domain',
      'SSL Certificate'
    ],
    delivery_days: 30,
    revisions: 10,
    is_active: true
  },
  // Video Editing Packages
  {
    service_id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'Social Media Pack',
    description: 'Perfect for daily content',
    price: 300,
    currency: 'USD',
    features: [
      '5 Reels/Videos',
      'Color Grading',
      'Basic Transitions',
      '720p Quality'
    ],
    delivery_days: 7,
    revisions: 3,
    is_active: true
  },
  {
    service_id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'Professional Video',
    description: 'High-quality branded content',
    price: 800,
    currency: 'USD',
    features: [
      'Full Video Production',
      'Motion Graphics',
      'Sound Design',
      '1080p Quality'
    ],
    delivery_days: 14,
    revisions: 5,
    is_active: true
  },
  // Graphic Design Packages
  {
    service_id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'Logo Design',
    description: 'Professional logo design',
    price: 250,
    currency: 'USD',
    features: [
      '3 Concepts',
      'Unlimited Revisions',
      'Source Files',
      'Brand Guidelines'
    ],
    delivery_days: 10,
    revisions: 5,
    is_active: true
  },
  {
    service_id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'Complete Branding',
    description: 'Full branding package',
    price: 750,
    currency: 'USD',
    features: [
      'Logo + Brand Book',
      'Business Cards',
      'Social Media Kit',
      'Brand Guidelines'
    ],
    delivery_days: 21,
    revisions: 10,
    is_active: true
  },
  // Social Media Marketing Packages
  {
    service_id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'Starter Plan',
    description: 'Perfect for new accounts',
    price: 400,
    currency: 'USD',
    features: [
      '1 Platform',
      '4 Posts/Month',
      'Basic Analytics',
      'Community Support'
    ],
    delivery_days: 30,
    revisions: 3,
    is_active: true
  },
  {
    service_id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'Growth Plan',
    description: 'For established accounts',
    price: 1000,
    currency: 'USD',
    features: [
      '3 Platforms',
      'Daily Posting',
      'Advanced Analytics',
      'Monthly Reports'
    ],
    delivery_days: 30,
    revisions: 5,
    is_active: true
  },
  // Consulting Packages
  {
    service_id: '550e8400-e29b-41d4-a716-446655440005',
    name: 'Single Session',
    description: 'One-time consultation',
    price: 150,
    currency: 'USD',
    features: [
      '1 Hour Session',
      'Strategy Discussion',
      'Initial Recommendations',
      'Follow-up Email'
    ],
    delivery_days: 2,
    revisions: 1,
    is_active: true
  },
  {
    service_id: '550e8400-e29b-41d4-a716-446655440005',
    name: 'Monthly Package',
    description: 'Ongoing support',
    price: 500,
    currency: 'USD',
    features: [
      '4 Sessions/Month',
      'Strategy & Execution',
      'Unlimited Email Support',
      'Monthly Reports'
    ],
    delivery_days: 30,
    revisions: 10,
    is_active: true
  }
]

export async function seedDatabase() {
  try {
    // Insert services
    for (const service of services) {
      const { error } = await supabaseAdmin
        .from('services')
        .upsert([service], { onConflict: 'id' })
      
      if (error) console.error('Service insert error:', error)
    }

    // Insert packages
    for (const pkg of packages) {
      const { error } = await supabaseAdmin
        .from('service_packages')
        .insert([pkg])
      
      if (error) console.error('Package insert error:', error)
    }

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Seeding error:', error)
  }
}
