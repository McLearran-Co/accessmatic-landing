import Link from 'next/link'
import { ArrowRight, Shield, FileText, CheckCircle, Clock, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AccessMatic</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="https://app.accessmatic.us/login" className="text-blue-600 hover:text-blue-700">
              Sign In
            </Link>
            <Link href="https://app.accessmatic.us/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Make Your PDFs
          <span className="text-blue-600 block">Accessible Instantly</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Add one line of code to your government website. Every PDF becomes WCAG 2.2 compliant automatically. 
          No uploads, no training, no workflow changes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://app.accessmatic.us/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Minutes vs. Weeks</h3>
            <p className="text-gray-600">Transform documents instantly instead of months of manual work</p>
          </div>
          
          <div className="flex flex-col items-center">
            <DollarSign className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">80% Cost Reduction</h3>
            <p className="text-gray-600">AI-powered processing costs fraction of manual remediation</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">WCAG 2.2 Compliant</h3>
            <p className="text-gray-600">Meet the latest accessibility standards automatically</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How AccessMatic Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Add One Script Tag</h3>
              <p className="text-gray-600">
                Copy and paste our script into your website, just like Google Analytics. Works with any CMS.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Automatic Discovery</h3>
              <p className="text-gray-600">
                Our AI scans your website and finds every PDF document. No manual uploads or inventory needed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Accessibility</h3>
              <p className="text-gray-600">
                When users click a PDF, they get the accessible version automatically. No broken workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
