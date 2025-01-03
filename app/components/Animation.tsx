'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Mic, FileText, Globe, Clock, Stethoscope, Thermometer, Pill, Activity, Brain, Wand2 } from 'lucide-react'

const features = [
  { icon: <Globe className="h-6 w-6 text-white" />, label: 'Multilingual' },
  { icon: <FileText className="h-6 w-6 text-white" />, label: 'EMR Integration' },
  { icon: <Mic className="h-6 w-6 text-white" />, label: 'Patient-Centric' },
  { icon: <Clock className="h-6 w-6 text-white" />, label: 'Efficient' },
]

const medicalElements = [
  { icon: <Stethoscope className="h-8 w-8 text-red-500" />, label: 'Symptoms', color: 'bg-red-100' },
  { icon: <Thermometer className="h-8 w-8 text-yellow-500" />, label: 'Diagnosis', color: 'bg-yellow-100' },
  { icon: <Pill className="h-8 w-8 text-green-500" />, label: 'Medication', color: 'bg-green-100' },
  { icon: <Activity className="h-8 w-8 text-blue-500" />, label: 'Vitals', color: 'bg-blue-100' },
]

export default function Animation() {
  const [generating, setGenerating] = useState(false)
  const [reportTemplate, setReportTemplate] = useState('')
  const [activeElements, setActiveElements] = useState<string[]>([])
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (activeElements.length === medicalElements.length) {
      handleGenerate()
    }
  }, [activeElements])

  const handleGenerate = async () => {
    setGenerating(true)
    await controls.start({ scale: [1, 1.2, 1], rotate: [0, 360, 0], transition: { duration: 2 } })
    setGenerating(false)
    setReportTemplate(`
Patient Report:
- Symptoms: [Detailed symptoms]
- Diagnosis: [Preliminary diagnosis]
- Medication: [Prescribed medication]
- Vitals: [Patient's vital signs]
    `.trim())
  }

  const handleElementEnter = (label: string) => {
    if (!activeElements.includes(label)) {
      setActiveElements([...activeElements, label])
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[700px] mb-16">
      <motion.div
        className="relative w-60 h-60 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-500 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          animate={controls}
        >
          <Brain className="text-white w-32 h-32" />
        </motion.div>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="absolute z-20"
            style={{
              top: '50%',
              left: '50%',
              x: `calc(180px * cos(${index * 90 + 45}deg) - 50%)`,
              y: `calc(180px * sin(${index * 90 + 45}deg) - 50%)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="bg-white p-3 rounded-full shadow-lg"
              whileHover={{ backgroundColor: '#E5E7EB' }}
            >
              {feature.icon}
            </motion.div>
            <p className="text-xs text-center mt-1 text-white font-semibold">{feature.label}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-16 flex justify-center flex-wrap gap-8">
        {medicalElements.map((element, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setHoveredElement(element.label)}
            onHoverEnd={() => setHoveredElement(null)}
            onAnimationComplete={() => handleElementEnter(element.label)}
          >
            <motion.div
              className={`${element.color} p-6 rounded-full shadow-lg`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {element.icon}
            </motion.div>
            <p className="text-sm mt-2 font-semibold">{element.label}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {hoveredElement && (
          <motion.div
            className="mt-8 text-center text-gray-600 bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p className="font-semibold text-lg mb-2">{hoveredElement}</p>
            <p className="text-sm">
              {hoveredElement === 'Symptoms' && 'AI-powered symptom analysis and recording'}
              {hoveredElement === 'Diagnosis' && 'Assist in accurate diagnosis using machine learning'}
              {hoveredElement === 'Medication' && 'Smart medication recommendations and interactions check'}
              {hoveredElement === 'Vitals' && 'Real-time monitoring and analysis of patient vital signs'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {generating && (
          <motion.div
            className="mt-12 text-blue-600 font-semibold flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <motion.div
              className="mr-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Wand2 className="w-6 h-6" />
            </motion.div>
            Generating AI-powered eReport...
          </motion.div>
        )}
      </AnimatePresence>
      {reportTemplate && (
        <motion.div
          className="mt-12 p-6 bg-white rounded-lg shadow-lg max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Generated eReport Template:</h3>
          <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded border border-gray-200">{reportTemplate}</pre>
        </motion.div>
      )}
    </div>
  )
}


