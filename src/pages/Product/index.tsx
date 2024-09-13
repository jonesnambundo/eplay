import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

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
      <Gallery name="jogo teste" jogos defaultCover={residentEvil} />
    </>
  )
}

export default Product
