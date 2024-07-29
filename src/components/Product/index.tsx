import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src="image" alt={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero
      perferendis, vitae ullam alias quibusdam deserunt hic nulla explicabo rem
      enim cupiditate eum praesentium, quos, dignissimos ab distinctio magnam
      at.
    </Descricao>
  </Card>
)

export default Product
