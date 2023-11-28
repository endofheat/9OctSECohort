import BasicGrid from "../components/BasicGrid";
import CustomCard from "../components/CustomCard";

export default function AboutPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="About">
      <h1>About</h1>
      <CustomCard title="Green Lizard" bottonText="Click me!">My First MUI component</CustomCard>

      <BasicGrid />
    </div>
  );
}
