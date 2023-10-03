(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Principio Responsabilidad Unica
    class ProductService {

        getProducto(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProducto(product: Product){
            console.log('Guardando en base de datos', product );
        }

    }

    // Principio Responsabilidad Unica
    class Mailer {

        private masterEmail: string = 'company@google.com';

        sendEmail(emailList: string[], template: 'to-clients'|'to-admins'){
            console.log('Enviando correo a los clientes', template);
        }
    }

    class CartBloc {

        public itemsInCart: object[] = [];

        addToCart(productId: number){
            console.log('Agregando al carrito ', productId );
        }

    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        constructor(
            private productService: ProductService,
            private mailer: Mailer,
        ){}
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            // console.log('Producto: ',{ id, name: 'OLED Tv' });
            this.productService.getProducto(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            // console.log('Guardando en base de datos', product );
            this.productService.saveProducto(product);
        }
    
        notifyClients() {
            // console.log('Enviando correo a los clientes');
            this.mailer.sendEmail(['julian@google.com'], 'to-clients');
        }
    
        // onAddToCart( productId: number ) {
        //     // Agregar al carrito de compras
        //     console.log('Agregando al carrito ', productId );
        // }
    
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();