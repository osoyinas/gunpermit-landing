import useStorage from '@/hooks/localStorage/useLocalStorage'

const useAssessmentLocalStorage = (): {
  selectedPlace: number | null;
  setSelectedPlace: (placeId: number) => void;
} => {
  const [selectedPlace, setSelectedPlace] = useStorage('selectedPlace', '')

  return {
    selectedPlace: selectedPlace ? parseInt(selectedPlace) : null,
    setSelectedPlace: (placeId: number) => setSelectedPlace(placeId.toString())
  }
}

export default useAssessmentLocalStorage
