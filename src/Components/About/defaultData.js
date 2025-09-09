import terrain from '../../assets/eye.png'
import vibration from '../../assets/nail.png'
import weather from '../../assets/blood.png'
import prediction from '../../assets/blood.png'
export const defaultData = {
  subheading: "Predicting, Real Time, And Reliable-Your complete Mineing Safety partner.",
cards: [
  {
    id: "terrain",
    title: "Terrain & Slope Analysis",
    icon: terrain,
    description:
      "AI models evaluate slope steepness, soil composition, and rock structure to detect unstable zones prone to rockfall."
  },
  {
    id: "vibration",
    title: "Seismic & Vibration Monitoring",
    icon: vibration,
    description:
      "Sensors continuously track ground vibrations, minor tremors, and blasting activities that may trigger rockfall events."
  },
  {
    id: "weather",
    title: "Weather & Rainfall Impact",
    icon: weather,
    description:
      "System analyzes rainfall intensity, freeze-thaw cycles, and temperature variations that weaken rock stability over time."
  },
  {
    id: "prediction",
    title: "Real-Time Risk Prediction",
    icon: prediction,
    description:
      "AI-powered models combine terrain, vibration, and weather data to generate accurate early warnings for rockfall hazards."
  }
]

};