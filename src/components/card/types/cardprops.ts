export interface ProductCardProps {
    img: string;
    width: string;
    title: string;
    children: React.ReactNode;
    price: number;
    loading: boolean;
    addtocart: () => void;
    savetowishlist: () => void;
    size: string;
    heartfill: boolean;
    href: string;
}