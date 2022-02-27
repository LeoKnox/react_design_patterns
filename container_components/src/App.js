import { CurrentUserLoader } from './CurrentUserLoader';
import { ResourceLoader } from './ResourceLoader';
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
	return (
		<>
			<ResourceLoader
				resourceUrl="/users/125"
				resourceName="user"
			>
				<UserInfo />
			</ResourceLoader>
			<ResourceLoader
				resourceUrl="/products/1112"
				resourceName="products"
			>
				<ProductInfo />
			</ResourceLoader>
		</>
	);
}

export default App;