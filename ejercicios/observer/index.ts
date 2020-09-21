interface Observer {
   update: (data:any) => void
}

interface Subject {
   subscribe: (observer: Observer) => void;
   unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
   observers: Observer[] = [];

   constructor() {
      const el: HTMLInputElement = document.querySelector("#value");
      
      el.addEventListener('input', () => {
         this.notify(el.value);
      })
   }


   subscribe (observer: Observer) {
      this.observers.push(observer);
   }

   unsubscribe (observer: Observer) {

      const index = this.observers.findIndex(obs => obs === observer)

      this.observers.splice(index, 1);
   }

   notify(data: any) {
      this.observers.forEach(observer => observer.update(data));
   }
}

class PriceDisplay implements Observer {
   private el:HTMLElement;

   constructor (elementID:string) {
      this.el = document.querySelector(`#${elementID}`);
   }

   update(data:any) {
      this.el.innerText = data;
   }
}

const value = new BitcoinPrice();
const display1 = new PriceDisplay('price');
const display2 = new PriceDisplay('price2');

value.subscribe(display1);
value.subscribe(display2);

setTimeout(
   () => value.unsubscribe(display1),5000
)
