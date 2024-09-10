import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ullam
          neque ex dicta sequi optio libero sit aperiam suscipit fugiat magni
          illo cupiditate totam, obcaecati maxime placeat ipsa omnis dolores!
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ullam
          neque ex dicta sequi optio libero sit aperiam suscipit fugiat magni
          illo cupiditate totam, obcaecati maxime placeat ipsa omnis dolores!
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>fotos</div>
      </Section>
    </>
  )
}

export default Product
