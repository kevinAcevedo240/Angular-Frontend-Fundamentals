import { Component, ViewChild, ElementRef   } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
   name = 'Kevin';
  age = 21;
  img = 'https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg';
  btnDisabled = true;
  register ={
    name: '',
    email: '',
    password: '',
  }
  InputDisabled = false;
  person ={
    name: 'Kevin Acevedo',
    age: 24,
    avatar:'https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg'
  }
  names: string[] = ['Kevin','Julian','Pedro','Pablo'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/Images/Toy.jpeg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/Images/Bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/Images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/Images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/Images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/Images/glasses.jpg'
    }
  ]

  toogleButton(){
    this.InputDisabled = !this.InputDisabled;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register)
  }

  handleDoubleClick() {
    // Acciones que deseas realizar al dar doble clic
    console.log("Doble clic ejecutado");
    // ...
  }

  handleContextMenu(event: MouseEvent) {
    event.preventDefault(); // Evita que se muestre el menú contextual del navegador

    // Aquí puedes crear y mostrar tu propio menú contextual personalizado
    // utilizando bibliotecas de menú o componentes personalizados
    // o mostrando opciones en un cuadro de diálogo, etc.
    console.log("Menú contextual personalizado mostrado");
  }

  @ViewChild('menu', { static: false }) menu!: ElementRef;

  selectedProduct: Product | undefined;

onRightClick(event: MouseEvent, product: Product) {
  event.preventDefault();
  this.menu.nativeElement.style.display = 'block';

  const parentRect = this.menu.nativeElement.parentElement.getBoundingClientRect();
  const offsetX = event.clientX - parentRect.left;
  const offsetY = event.clientY - parentRect.top;

  this.menu.nativeElement.style.left = offsetX + 'px';
  this.menu.nativeElement.style.top = offsetY + 'px';

  this.selectedProduct = product; // Almacena el producto seleccionado

  console.log(this.selectedProduct);
}

  eliminarProducto() {
    if (this.selectedProduct) {
      const index = this.products.indexOf(this.selectedProduct);
      if (index !== -1) {
        this.products.splice(index, 1); // Elimina el producto del arreglo
      }
    }
  }

}
