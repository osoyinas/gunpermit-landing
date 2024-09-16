'use client'

import * as React from 'react'
import { CheckIcon, XIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function TestQuestionComponent () {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const correctAnswer = 'b'

  React.useEffect(() => {
    if (selectedAnswer) {
      setIsSubmitted(true)
    }
  }, [selectedAnswer])

  const handleNextQuestion = () => {
    // Logic for next question
    console.log('Next question')
  }

  const handlePreviousQuestion = () => {
    // Logic for previous question
    console.log('Previous question')
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col md:justify-center md:items-center p-4"
      >
        <Card className="w-full max-w-4xl h-full md:h-auto overflow-hidden rounded-none md:rounded-2xl shadow-lg flex flex-col">
          <CardHeader className="bg-primary/10 p-4 md:p-6 lg:p-8 flex-shrink-0">
            <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
              Pregunta de Prueba
            </CardTitle>
            <CardDescription className="text-center text-base md:text-lg mt-2">
              Selecciona la respuesta correcta
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 lg:p-8 flex-grow overflow-y-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6 h-full flex flex-col justify-center"
            >
              <div className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-6">
                ¿Cuál es el primer paso al manejar un arma de fuego?
              </div>
              <RadioGroup
                onValueChange={setSelectedAnswer}
                disabled={isSubmitted}
                className="space-y-4"
              >
                {[
                  { value: 'a', label: 'Apuntar al objetivo' },
                  { value: 'b', label: 'Verificar si está cargada' },
                  { value: 'c', label: 'Quitar el seguro' }
                ].map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 bg-primary/5 p-4 rounded-xl transition-colors hover:bg-primary/10">
                      <RadioGroupItem value={option.value} id={option.value} className="text-primary" />
                      <Label htmlFor={option.value} className="text-base md:text-lg cursor-pointer flex-grow">
                        {option.label}
                      </Label>
                    </div>
                  </motion.div>
                ))}
              </RadioGroup>
            </motion.div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 p-4 md:p-6 lg:p-8 bg-primary/5 flex-shrink-0">
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-center p-4 md:p-6 rounded-xl ${
                  selectedAnswer === correctAnswer
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-red-500/20 text-red-500'
                }`}
              >
                {selectedAnswer === correctAnswer
                  ? (
                  <div className="flex items-center justify-center text-lg md:text-xl">
                    <CheckIcon className="mr-2 h-6 w-6 md:h-8 md:w-8" />
                    ¡Correcto! Bien hecho.
                  </div>
                    )
                  : (
                  <div className="flex flex-col items-center justify-center text-lg md:text-xl">
                    <XIcon className="mb-2 h-6 w-6 md:h-8 md:w-8" />
                    <p>Incorrecto.</p>
                    <p className="mt-2">La respuesta correcta es: Verificar si está cargada.</p>
                  </div>
                    )}
              </motion.div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-4xl mx-auto p-4 flex justify-between"
      >
        <Button
          onClick={handlePreviousQuestion}
          className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
          variant="outline"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          Anterior
        </Button>
        <Button
          onClick={handleNextQuestion}
          className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
          variant="outline"
        >
          Siguiente
          <ArrowRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </motion.div>
    </div>
  )
}
