export class HoroscopoChino {
  public nombre:string='';
  apat:string='';
  amat:string='';
  dia:number=0;
  mes:number=0;
  anio:number=0;
  sexo:string='';
  edad:number=0;
  signo:string='';
  imagen:string='';

  signos: { nombre: string, imagen: string }[] = [
    { nombre: 'Rata', imagen: 'https://i.pinimg.com/736x/78/46/7f/78467fe09064548b205d95857e097efa.jpg' },
    { nombre: 'Buey', imagen: 'https://i.pinimg.com/736x/ee/7a/d3/ee7ad3904616dc927b4ca3c27168cb66.jpg' },
    { nombre: 'Tigre', imagen: 'https://i.pinimg.com/736x/d0/fc/39/d0fc394b4bbb6eb107d4ad3c9516bd7d.jpg' },
    { nombre: 'Conejo', imagen: 'https://i.pinimg.com/736x/82/ec/b7/82ecb7674083501a1d2eeb1621ed636a.jpg' },
    { nombre: 'Dragón', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsOk-XM3_qGZ3iNvaDEpLdPY86_P_h_VMiQ&s' },
    { nombre: 'Serpiente', imagen: 'https://static.vecteezy.com/system/resources/previews/002/185/149/non_2x/chinese-zodiac-sign-animal-snake-serpent-cartoon-drawing-vector.jpg' },
    { nombre: 'Caballo', imagen: 'https://i.pinimg.com/736x/fe/7a/30/fe7a30d31c654810aa6daca2ed2ce0c1.jpg' },
    { nombre: 'Cabra', imagen: 'https://i.pinimg.com/736x/aa/23/fd/aa23fdc78caa267e16540dc143456fc1.jpg' },
    { nombre: 'Mono', imagen: 'https://i.pinimg.com/736x/c7/19/9d/c7199d2beb903b8890c7bd7f13792c06.jpg' },
    { nombre: 'Gallo', imagen: 'https://i.pinimg.com/736x/d4/d2/b3/d4d2b39ab31cabb88631c080fdd19d4c.jpg' },
    { nombre: 'Perro', imagen: 'https://i.pinimg.com/736x/c6/0c/31/c60c3198ad9e31e8df10d8e28630b826.jpg' },
    { nombre: 'Cerdo', imagen: 'https://i.pinimg.com/736x/e6/d7/1a/e6d71ae254f1714c094ab6c93fc046eb.jpg' },
  ];

  calcularEdad(): number {
     let mesAct = 10;
     let anioAct = 2025;
     let diaAct = 11;

     this.edad = anioAct - this.anio;

     if(this.mes > mesAct){
      this.edad --
     }else if(this.mes == mesAct && this.dia > diaAct){
      this.edad --
     }
     return this.edad;
  }

  obtenerSigno(): string {
    let base = 1900;
    let calculo = this.anio - base;

    while (calculo >= 12) {
      calculo -= 12;
    }
    while (calculo < 0) {
      calculo += 12;
    }

    this.signo = this.signos[calculo].nombre;
    this.imagen = this.signos[calculo].imagen;

    return this.signo;
  }
}
