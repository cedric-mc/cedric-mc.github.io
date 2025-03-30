import { useNavigate } from "react-router";
import { useEtudes } from "../hooks/useEtudes";
import { useEffect } from "react";

export function SkillsUniv() {
  const navigate = useNavigate();
  const isEtudes = useEtudes();
  useEffect(() => {
    if (!isEtudes) {
      navigate('/skills');
    }
  }, [isEtudes, navigate]);

  return (
    <section id="skills">
      <h2 className="title-section">Mes blocs de compétences</h2>
      <p>Voici les différents blocs de compétences que j'ai acquis durant ma formation :</p>
      <div>
        <h3 className="subtitle-section"></h3>
        <ul className="skills-list">
        </ul>
      </div>
    </section>
  );
}