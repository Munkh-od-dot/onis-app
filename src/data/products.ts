export interface Product {
  title: string;
  description: string;
  img: string;
}

export const products: Product[] = [
  {
    title: 'Оньс Шоп-дэлгүүрийн програм',
    description: 'Жижиглэн худалдаа, дэлгүүрийн бизнес эрхлэгчдэд зориулсан хамгийн олон шийдэлтэй хялбар КАССЫН ПРОГРАМ юм.',
    img: '/public/product_img/onisshop.jpg',
  },
  {
    title: 'Оньс Плас- мобайл програм',
    description: 'Худалдаа, үйлчилгээ эрхлэгчдэд зориулсан ИБАРИМТ өгөх хялбар МОБАЙЛ ПОС, гар утасны АППЛИКЕЙШН юм.',
    img: '/public/product_img/onisplus.jpg',
  },
  {
    title: 'Оньс Пос- дэлгүүрийн програм',
    description: 'Оньс Пос нь бүх төрлийн худалдаа эрхлэгчдэд зориулсан хамгийн хялбар МОБАЙЛ ПОС, гар утасны АППЛИКЕЙШН юм.',
    img: '/public/product_img/onispos.jpg',
  },
  {
    title: 'Оньс Тооллого- мобайл програм',
    description: 'Худалдаа, үйлчилгээ эрхлэгчдэд зориулсан ИБАРИМТ өгөх хялбар МОБАЙЛ ПОС, гар утасны АППЛИКЕЙШН юм.',
    img: '/public/product_img/onistoollogo.jpg',
  },
  {
    title: 'Оньс Фүүд- Цайны газар',
    description: 'Цайны газар, кофе шоп, буфет зэрэг төрөл бүрийн хоол ундны үйлчилгээний бизнес эрхлэгчдэд зориулсан хамгийн олон шийдэлтэй хоолны газрын ПРОГРАМ юм.',
    img: '/public/product_img/onisfood.jpg',
  },
  {
    title: 'Оньс сервис- Цаг захиалга',
    description: 'Төрөл бүрийн үйлчилгээний бизнес эрхлэгчдэд зориулсан хялбар цаг захиалга, ажилтан, үйлчлүүлэгчийн удирдлагын програм юм.',
    img: '/public/product_img/onisservice.jpg',
  },
];