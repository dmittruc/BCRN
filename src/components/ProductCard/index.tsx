import { Image, Text, View } from 'react-native';
import { IMAGE_BASE_URL } from '../../constans';

interface IProps {
  name: string;
  description: string;
  price: number;
  image?: string;
}

const ProductCard = ({ name, description, price, image }: IProps) => {
  console.log('image:', image);
  console.log('IMAGE_BASE_URL:', IMAGE_BASE_URL);
  const imageUri = image ? `${IMAGE_BASE_URL}/${image}` : null;
  console.log('imageUri:', imageUri);

  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>Price: {price.toFixed(2)}</Text>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          alt={name}
          style={{ width: 500, height: 200 }}
        />
      )}
    </View>
  );
};

export default ProductCard;
