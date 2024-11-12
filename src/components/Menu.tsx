
import { motion } from 'framer-motion';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-amber-600 font-bold">₹{price}</p>
    </motion.div>
  );
};

const Menu = () => {
  const menuItems = [
    {
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato-butter gravy",
      price: "350",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dal Makhani",
      description: "Creamy black lentils simmered overnight",
      price: "250",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Biryani",
      description: "Fragrant basmati rice with aromatic spices",
      price: "300",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Paneer Tikka",
      description: "Grilled cottage cheese with spices",
      price: "280",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Naan Bread",
      description: "Freshly baked Indian bread",
      price: "60",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Gulab Jamun",
      description: "Sweet milk dumplings in sugar syrup",
      price: "120",
      // image: "https://images.unsplash.com/photo-1605197584547-c93ea1a820ad?q=80&w=2070&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-gray-600">Discover our exquisite selection of dishes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;