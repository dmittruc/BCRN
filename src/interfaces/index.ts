interface BaseProduct {
  id: string;
  name: string;
  price?: number;
  image?: string;
}

interface LiquidProduct extends BaseProduct {}
