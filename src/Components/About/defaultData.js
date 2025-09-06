import eye from '../../assets/eye.png'
import nail from '../../assets/nail.png'
import blood from '../../assets/blood.png'
export const defaultData = {
  heading: "About Our Project",
  subheading: "AI-powered non-invasive anemia screening using Eye, Nail, and Skin detection.",
  cards: [
    {
      id: "eye",
      title: "Conjunctiva (Eye) Analysis",
      icon: eye,
      description:
        "AI examines the palpebral conjunctiva for pallor, reduced coloration, and vascular visibility to identify anemia signs."
    },
    {
      id: "nail",
      title: "Nail Bed Examination",
      icon: nail,
      description:
        "The system detects nail bed pallor and structural changes such as koilonychia (spoon-shaped nails), both linked to anemia."
    },
    {
      id: "skin",
      title: "Skin & Lip Color Assessment",
      icon: blood,
      description:
        "Advanced color analysis evaluates skin and lip pallor, providing key indicators of hemoglobin deficiency."
    }
  ]
};