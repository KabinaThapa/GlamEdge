/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['cdn.shopify.com',
        'minion-vinovatheme.myshopify.com',
        'dt-glowish.myshopify.com', 
        'yanka-demos.myshopify.com', 
        'skudmart.myshopify.com',
        'websitedemos.net',
        'images.pexels.com',
        'images.unsplash.com',
        'nenaandpasadena.com'
    ],
        
    
      },
      async rewrites() {
        return [
          // Rewrite requests with /api/products to the backend server running on port 4001
          {
            source: '/products',
            destination: 'http://localhost:4001/products',
          },
          // Rewrite requests with /api/category to the backend server running on port 4005
          {
            source: '/category',
            destination: 'http://localhost:4005/category',
          },
          {
            source:'/subcategory',
            destination: 'http://localhost:4003/subcategory',
          }
          
        ];
      },

}

module.exports = nextConfig
