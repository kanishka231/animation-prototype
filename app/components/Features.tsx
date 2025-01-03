import { Mic, FileText, Globe, Clock } from 'lucide-react'

const features = [
  {
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    title: 'Multilingual Support',
    description: 'Transcribes and summarizes in major Indian languages with localized medical terminology.'
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    title: 'EMR Integration',
    description: 'Compatible with Indian EMRs and compliant with DISHA and data protection standards.'
  },
  {
    icon: <Mic className="h-8 w-8 text-blue-500" />,
    title: 'Patient-Centric Tools',
    description: 'Delivers summaries in regional languages for better understanding and adherence.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: 'Clinician Efficiency',
    description: 'Automates documentation, reducing administrative workload.'
  }
]

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 gap-8 my-16">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {feature.icon}
            <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

