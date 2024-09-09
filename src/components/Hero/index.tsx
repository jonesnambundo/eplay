import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'

import { Banner } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    hero
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <h2>Hogwarts Legacy</h2>
      <p>
        <span>De R$ 250,00</span>
        Por R$ 190,00
      </p>
      <Button
        type="button"
        title="Clique aqui para adicionar este jogo ao carrinho"
        variant="primary"
      >
        Adicionar ao carrinho
      </Button>
    </div>
  </Banner>
)

export default Hero
