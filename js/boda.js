// Obtener la URL completa
const url = new URL(window.location.href);

const divBody = document.getElementById("principal");


let listInvitados = [
    {"id" : 1, "nombre" : "Pa'", "nombreCompleto" : "Alvaro Grisales", "mensaje" : "Sé que todo lo que has tenido me lo has dado y nunca dejaré de agradecerte por eso, no sería nada sin tu apoyo. Gracias a todo tu cariño, amor y esfuerzos hoy soy una gran mujer que desde ahora en adelante ha decidido compartir su vida del lado de un hombre que me brinda todo eso y mucho más de lo que tú me has dado. " },
    {"id" : 2, "nombre" : "Biata", "nombreCompleto" : "Beatriz Piedrahita", "mensaje" : "Nunca me alcanzará la vida para agradecerte todo lo que me brindaste a pesar de todas las dificultades. Me diste una nueva oportunidad y un nuevo camino, sabes que sin la ayuda de mi papá no sería lo que hoy soy, pero sin la tuya tampoco. Sé que algún día dije que no eras mi mamá, pero no comprendía realmente el significado de la palabra y de alguna u otra forma eso fuiste para mí a través de los años. Gracias por formar a esta gran mujer, que de ahora en adelante, por todo lo que le brindaste, tiene todas las herramientas para compartir su vida con alguien más. " },
    {"id" : 3, "nombre" : "Juanes", "nombreCompleto" : "Juan Esteban Acevedo", "mensaje" : "Gracias por aguantarme jeje al final eso es lo que hacen los hermanos,te guardo en mi corazón con mucho cariño y quiero que sepas que siempre serás mi familia. " },
    {"id" : 4, "nombre" : "Juli", "nombreCompleto" : "Julian David Acevedo", "mensaje" : "Gracias por aguantarme jeje al final eso es lo que hacen los hermanos,te guardo en mi corazón con mucho cariño y quiero que sepas que siempre serás mi familia." },
    {"id" : 5, "nombre" : "Mamá", "nombreCompleto" : "Sonia Rivera", "mensaje" : "Sé que las cosas no han sido fáciles para ninguna de las dos, pero agradezco todas y cada una de las cosas que me has brindado, porque sé que me has dado lo mejor que has podido. Gracias a todo hoy me convertido en lo que soy, una gran mujer llena de muchos valores y con la capacidad de compartir su vida al lado de un gran hombre." },
    {"id" : 6, "nombre" : "Andre", "nombreCompleto" : "Andrea Grisales", "mensaje" : "Quiero que sepas que eres mi ejemplo a seguir, de no tenerte como hermana mis sueños y aspiraciones en la vida hubieran sido muy diferentes, gracias a eso he logrado crearme cierta visión de la vida y lo creas o no tus opiniones son las únicas que me afectan y crean eco en mí. Sin embargo, también tengo mis propios pensamientos y opiniones que son los que hoy me hacen ser quien soy, he decidido compartir mi vida al lado de otra persona con quien espero gozar de toda la felicidad y amor del mundo y me encantaría que me apoyes en eso. " },
    {"id" : 7, "nombre" : "Pa'", "nombreCompleto" : "Hernan Cuervo", "mensaje" : "\"Ya no me lleva mi padre la mano, solamente sus consejos\", Como siempre te lo he dicho, eres la persona más hermosa que conozco. Gracias por inculcarme valores tan lindos y bellos que me han convertido en un verdadero caballero. Agradezco también por enseñarme a priorizar siempre a mi familia y por ayudarme a convertirme en el gran hombre que Manuela, la mujer con la que he decidido compartir el resto de mi vida como mi esposa, podrá disfrutar. Ella podra estár tranquila al saber que seré un gran esposo y un gran padre, porque seguiré tu ejemplo hasta el final de mis días." },
    {"id" : 8, "nombre" : "Ma'", "nombreCompleto" : "Beatriz Ramírez", "mensaje" : "Quiero agradecerte por ayudarme a convertirme en el hombre que soy hoy. Puedes estar tranquila, ya que he escogido a una excelente mujer para cuidar de mí por el resto de mi vida, pero sé que tú siempre estarás allí para cuidarme, sin importar cuándo o dónde. De ti aprendí lo que es el verdadero amor. Gracias por darme la vida, por todo lo que me has brindado hasta ahora y por ser la mejor mamá del mundo. Te amo inmesamente" },
    {"id" : 9, "nombre" : "Santi", "nombreCompleto" : "Santiago Cuervo", "mensaje" : "Mi hermano del alma, infinitas gracias por cuidar siempre de todos nosotros, en ocasiones me haces sentir el menor por todo lo que me enseñas, aunque no lo demuestro a menudo, sabes que te quiero mucho, espero de corazón logres cumplir todos tus sueños" },
    {"id" : 10, "nombre" : "Jenny", "nombreCompleto" : "Jenny Rico", "mensaje" : "Tu familia será siempre un ejemplo a seguir, se que la nuestra será igual de hermosa. Gracias a tu ayuda y consejos, tenemos la certeza que este día será casi perfecto. Dios te bendiga siempre" },
    {"id" : 11, "nombre" : "Johan", "nombreCompleto" : "Johan Palacio", "mensaje" : "Todos tenemos un modelo a seguir en la vida, y desde que era niño, tú siempre has sido ese modelo para mí. Incluso ahora que somos adultos, tú y tu familia siguen siendo una fuente de inspiración para mí." },
    {"id" : 12, "nombre" : "Laura", "nombreCompleto" : "Laura Betancur", "mensaje" : "" },
    {"id" : 13, "nombre" : "Amparo", "nombreCompleto" : "Amparo Deosa", "mensaje" : "" },
    {"id" : 14, "nombre" : "Tía Amparo", "nombreCompleto" : "Amparo Ramirez", "mensaje" : "" },
    {"id" : 15, "nombre" : "Alejo", "nombreCompleto" : "Alejandro" , "mensaje" : "" },
    {"id" : 16, "nombre" : "Tío Bayron", "nombreCompleto" : "Bayron Rivera", "mensaje" : "" },
    {"id" : 17, "nombre" : "Michel", "nombreCompleto" : "Emilse Velez Bedoya", "mensaje" : "" },
    {"id" : 18, "nombre" : "Oscar", "nombreCompleto" : "Oscar Andres Palacio", "mensaje" : "" },
    {"id" : 19, "nombre" : "Bayron", "nombreCompleto" : "Bayron Restrepo", "mensaje" : "" },
    {"id" : 20, "nombre" : "Camilo", "nombreCompleto" : "Camilo Chavarriaga", "mensaje" : "" },
    {"id" : 21, "nombre" : "David", "nombreCompleto" : "Carlos David Ramirez", "mensaje" : "Mi primo, colega y amigo del alma. Cuando nos reunimos, volvemos a ser los niños de siempre.  No existirá jamás una amistad mas sincera que la nuestra" },
    {"id" : 22, "nombre" : "Tío Mario", "nombreCompleto" : "Mario Ramirez", "mensaje" : "" },
    {"id" : 23, "nombre" : "Teo", "nombreCompleto" : "Mateo Ramirez", "mensaje" : "" },
    {"id" : 24, "nombre" : "Dorita", "nombreCompleto" : "Dora Valencia", "mensaje" : "" },
    {"id" : 25, "nombre" : "Cata", "nombreCompleto" : "Catalina Ballesteros", "mensaje" : "Aunque pase el tiempo y no hablemos con frecuencia, nuestra amistad perdurará para siempre." },
    {"id" : 26, "nombre" : "Tía Consuelo", "nombreCompleto" : "Consuelo Ramirez", "mensaje" : "" },
    {"id" : 27, "nombre" : "Cristian", "nombreCompleto" : "Cristian Camilo Ramirez", "mensaje" : "" },
    {"id" : 28, "nombre" : "Dani", "nombreCompleto" : "Daniel Gomez", "mensaje" : "" },
    {"id" : 29, "nombre" : "Dilber", "nombreCompleto" : "Dilber Tangarife", "mensaje" : "Gracias por estar ahí en momentos donde nadie más estuvo, eres parte de mi historia y tú mejor que muchos sabes lo que me ha costado llegar hasta aquí, aunque en algunos momentos no creía que fuera posible hoy soy demasiado feliz, me encantaría que estuvieras conmigo, te quiero un montón." },
    {"id" : 30, "nombre" : "Edw", "nombreCompleto" : "Edward Velazques", "mensaje" : "" },
    {"id" : 31, "nombre" : "Don Efra", "nombreCompleto" : "Efrain Rios", "mensaje" : "" },
    {"id" : 32, "nombre" : "Eliana", "nombreCompleto" : "Eliana Ramirez", "mensaje" : "" },
    {"id" : 33, "nombre" : "Eliza", "nombreCompleto" : "Elizabeth Toro", "mensaje" : "Sabes que tienes un lugar reservado en mi corazón y aunque sé que soy fría y no soy la mejor demostrandolo, valoro todas y cada una de las cosas que me brindas y espero poder demostrartelo de la mejor manera. Te quiero mucho y espero poder compartir a tu lado este y muchos momentos más en nuestras vidas" },
    {"id" : 34, "nombre" : "Magdalena", "nombreCompleto" : "Magdalena Catañeda", "mensaje" : "Gracias por abrirme siempre las puertas de tu casa, eres una gran persona y espero poder estar siempre cerca de toda tu familia, los quiero mucho." },
    {"id" : 35, "nombre" : "Miguel", "nombreCompleto" : "Miguel Angel Toro", "mensaje" : "" },
    {"id" : 36, "nombre" : "Tía Estela", "nombreCompleto" : "Estela Grisales", "mensaje" : "" },
    {"id" : 37, "nombre" : "Vane", "nombreCompleto" : "Vanessa Grisales", "mensaje" : "" },
    {"id" : 38, "nombre" : "Natalia", "nombreCompleto" : "Natalia Jimenez", "mensaje" : "" },
    {"id" : 39, "nombre" : "Marlon", "nombreCompleto" : "Marlon Grisales", "mensaje" : "" },
    {"id" : 40, "nombre" : "Pine", "nombreCompleto" : "Estiven Pineda", "mensaje" : "" },
    {"id" : 41, "nombre" : "Padrino", "nombreCompleto" : "Fernando Ramírez", "mensaje" : "Eres para mí el fiel reflejo de mi abuelo y te aprecio de igual manera. Quiero agradecerte sinceramente por toda la ayuda que me has brindado y por las valiosas lecciones que me has enseñado." },
    {"id" : 42, "nombre" : "Rocy", "nombreCompleto" : "Rocio Tamayo", "mensaje" : "" },
    {"id" : 43, "nombre" : "Bibi", "nombreCompleto" : "Bibiana Polaskey", "mensaje" : "Mi hermanita mayor, a pesar de la distancia, sabes del gran cariño que te tengo" },
    {"id" : 44, "nombre" : "Andrew", "nombreCompleto" : "Andrew Polaskey", "mensaje" : "Thank you for taking care of my older sister, you've proven to be a great person" },
    {"id" : 45, "nombre" : "Gloria", "nombreCompleto" : "Gloria", "mensaje" : "" },
    {"id" : 46, "nombre" : "Henry", "nombreCompleto" : "Henry Ramirez", "mensaje" : "" },
    {"id" : 47, "nombre" : "Jhon", "nombreCompleto" : "Jhon Grisales", "mensaje" : "" },
    {"id" : 48, "nombre" : "Laura", "nombreCompleto" : "Laura Henao", "mensaje" : "" },
    {"id" : 49, "nombre" : "Laura", "nombreCompleto" : "Laura Ospina", "mensaje" : "" },
    {"id" : 50, "nombre" : "Santiago", "nombreCompleto" : "Santiago Ospina", "mensaje" : "" },
    {"id" : 51, "nombre" : "Uriel", "nombreCompleto" : "Uriel Ospina", "mensaje" : "" },
    {"id" : 52, "nombre" : "Yolanda", "nombreCompleto" : "Yolanda Grisales", "mensaje" : "" },
    {"id" : 53, "nombre" : "Tia Lilia", "nombreCompleto" : "Lilia Cuervo Restrepo", "mensaje" : "Me resulta difícil expresar con palabras lo agradecido que estoy por todo lo que has hecho por mi y mi familia. Tu bondad, respeto, sinceridad, amor y tantos otros valores que poseo, los aprendí gracias a ti. Eres un ejemplo de que con poco se puede lograr mucho y que compartir lo que tienes trae grandes recompensas." },
    {"id" : 54, "nombre" : "Juan Fernando", "nombreCompleto" : "Juan Fernando Betancur", "mensaje" : "" },
    {"id" : 55, "nombre" : "Luisa", "nombreCompleto" : "Luisa Fernanda Betancur", "mensaje" : "" },
    {"id" : 56, "nombre" : "Paula", "nombreCompleto" : "Paula Ramirez", "mensaje" : "" },
    {"id" : 57, "nombre" : "Tia Nena", "nombreCompleto" : "Luz Helena Cuervo", "mensaje" : "Mi querida madrina, no encuentro las palabras adecuadas para expresar todo lo que significas para mí. Desde pequeño has estado a mi lado brindándome amor, cariño y consejos que siempre llevaré conmigo. Estoy agradecido de tener una madrina tan hermosa y maravillosa como tú. Gracias por todo el amor que me has dado, siempre estarás en mi corazón" },
    {"id" : 58, "nombre" : "Tío John Jairo", "nombreCompleto" : "Jhon Jairo Cuervo", "mensaje" : "No importa cuáles sean las opiniones de los demás, para mí lo importante es que eres una persona valiosa y única, de mi parte siempre recibirás mi aprecio incondicional" },
    {"id" : 59, "nombre" : "Isa", "nombreCompleto" : "Maria Isabela Ceballos", "mensaje" : "" },
    {"id" : 60, "nombre" : "Cristian", "nombreCompleto" : "Cristian Alejandro Cuervo", "mensaje" : "" },
    {"id" : 61, "nombre" : "Lina", "nombreCompleto" : "Lina Estrada", "mensaje" : "" },
    {"id" : 62, "nombre" : "Libia", "nombreCompleto" : "Libia Gomez", "mensaje" : "" },
    {"id" : 63, "nombre" : "Margara", "nombreCompleto" : "Margarita Ramirez", "mensaje" : "" },
    {"id" : 64, "nombre" : "Maria Isabel", "nombreCompleto" : "Maria Isabel Tabares", "mensaje" : "" },
    {"id" : 65, "nombre" : "Maria", "nombreCompleto" : "Maria Paulina Marin", "mensaje" : "" },
    {"id" : 66, "nombre" : "Cachi", "nombreCompleto" : "Marlen Casafus", "mensaje" : "" },
    {"id" : 67, "nombre" : "Primito Cascarrabias", "nombreCompleto" : "Mauricio Restrepo", "mensaje" : "Eres el guardián de los valores y tradiciones de nuestra familia. Te confío los cuadros de mi abuelo para que los cuides con el mismo amor y respeto que él les tenía. Y cuando enfrentes algún conflicto, piensa en cómo actuaría él. Estoy seguro de que su sabiduría te guiará por el camino correcto." },
    {"id" : 68, "nombre" : "Tía Mery", "nombreCompleto" : "Mery Grisales", "mensaje" : "" },
    {"id" : 69, "nombre" : "Deiby", "nombreCompleto" : "Deiby Garcia", "mensaje" : "" },
    {"id" : 70, "nombre" : "Nelson", "nombreCompleto" : "Nelson Garcia", "mensaje" : "" },
    {"id" : 71, "nombre" : "Tío Nelson", "nombreCompleto" : "Nelson Ramirez", "mensaje" : "" },
    {"id" : 72, "nombre" : "Tio Orlando", "nombreCompleto" : "Orlando Grisales", "mensaje" : "" },
    {"id" : 73, "nombre" : "Juanes", "nombreCompleto" : "Juanes Grisales", "mensaje" : "" },
    {"id" : 74, "nombre" : "Ricardo", "nombreCompleto" : "Ricardo Yepes", "mensaje" : "" },
    {"id" : 75, "nombre" : "Tía Rocio", "nombreCompleto" : "Rocio Grisales", "mensaje" : "" },
    {"id" : 76, "nombre" : "Nata", "nombreCompleto" : "Nataly Echavarria", "mensaje" : "" },
    {"id" : 77, "nombre" : "Viviana", "nombreCompleto" : "Viviana Echavarria", "mensaje" : "" },
    {"id" : 78, "nombre" : "Novio Nataly", "nombreCompleto" : "Sergio Ramirez", "mensaje" : "" },
    {"id" : 79, "nombre" : "Tío Roger", "nombreCompleto" : "Roger Ramirez", "mensaje" : "" },
    {"id" : 80, "nombre" : "Mi prima hermosa", "nombreCompleto" : "Rubi Ramirez", "mensaje" : "Eres mi prima adorada. Aunque ya no hablamos tanto, quiero que sepas que en mi corazón siempre llevaré los lindos momentos que vivimos juntos en nuestra infancia" },
    {"id" : 81, "nombre" : "Negro", "nombreCompleto" : "Santiago Hernandez", "mensaje" : "" },
    {"id" : 82, "nombre" : "Santi", "nombreCompleto" : "Santiago Espinosa", "mensaje" : "Santi, gracias por estar ahí durante tantos momentos, has sido un gran apoyo y te agradezco enormemente por ser mi amigo, espero poder brindarte las mismas cosas lindas que me has dado y también a la pequeña génesis. Te amo mucho y espero podamos compartir muchos momentos más juntos. " },
    {"id" : 83, "nombre" : "Mono", "nombreCompleto" : "Sebastian Anderson", "mensaje" : "" },
    {"id" : 84, "nombre" : "Sergio", "nombreCompleto" : "Sergio Ramirez", "mensaje" : "" },
    {"id" : 85, "nombre" : "Sofi", "nombreCompleto" : "Sofia Maldonado", "mensaje" : "Sé que no soy una persona fácil, pero te agradezco por aguantarme a pesar de todo. Eres una gran persona y gracias por querer acompañarme en este gran día, significa mucho para mí. " },
    {"id" : 86, "nombre" : "Vale", "nombreCompleto" : "Valeria Morales", "mensaje" : "" },
    {"id" : 87, "nombre" : "Wanda", "nombreCompleto" : "Wanda Ramirez", "mensaje" : "" },
    {"id" : 88, "nombre" : "Hijueputón", "nombreCompleto" : "William Ramirez", "mensaje" : "" },
    {"id" : 89, "nombre" : "Yeidi", "nombreCompleto" : "Yeidi Cartagena", "mensaje" : "Gracias por brindarme tu amistad de la forma más desinteresada y real, me encantaría poder compartir este y muchos más momentos a tu lado, eres una gran persona" },
    {"id" : 90, "nombre" : "Carlos", "nombreCompleto" : "Carlos Ospina", "mensaje" : "" },
    {"id" : 91, "nombre" : "Yulisa", "nombreCompleto" : "Yulisa Zapata", "mensaje" : "" },
    {"id" : 92, "nombre" : "Consuelo", "nombreCompleto" : "Consuelo Grisales", "mensaje" : "" },
    {"id" : 93, "nombre" : "Juan Carlos", "nombreCompleto" : "Juan Carlos Zapata", "mensaje" : "" },
    {"id" : 94, "nombre" : "Diego", "nombreCompleto" : "Diego Ramirez", "mensaje" : "" },
    {"id" : 95, "nombre" : "Giovani", "nombreCompleto" : "Giovani Ramirez", "mensaje" : "" },
    {"id" : 96, "nombre" : "Mirna", "nombreCompleto" : "Mirna Becerra", "mensaje" : "" },
    {"id" : 97, "nombre" : "Tati", "nombreCompleto" : "Tatiana Ramirez", "mensaje" : "" },
    {"id" : 98, "nombre" : "Prima", "nombreCompleto" : "Erika Restrepo", "mensaje" : "Aunque sabía que la situación era compleja, eras una de las personas que más deseaba que estuviera presente en este día tan especial para mí. No sabes cuánto nos alegra saber que podrás venir con tu familia. Es un gran gesto que nunca olvidaremos." },
    {"id" : 99, "nombre" : "Luis", "nombreCompleto" : "Luis Herrera", "mensaje" : "" },
    {"id" : 100, "nombre" : "Benny", "nombreCompleto" : "Benny Díaz ", "mensaje" : "" },
    {"id" : 101, "nombre" : "Nico", "nombreCompleto" : "Nicolas Velez", "mensaje" : "Sabes que somos como hermanitos, eres de las personas que mas voy a extrañar este día, entiendo que es poco probable que puedas estar pero no puedo dejar de invitarte, el mundo da mil vueltas y ps quien sabe. Te extrañamos mucho guebón, prontamente tendremos la oportunidad de reunirnos allá." },
    {"id" : 102, "nombre" : "Emanuel", "nombreCompleto" : "Emanuel Herrera", "mensaje" : ""  },
    {"id" : 103, "nombre" : "Luis", "nombreCompleto" : "Luis", "mensaje" : ""  },
    {"id" : 104, "nombre" : "Nico", "nombreCompleto" : "Nicolas ", "mensaje" : "" },
    {"id" : 105, "nombre" : "Jonathan y Tatiana", "nombreCompleto" : "Jonathan y Tatiana ", "mensaje" : "" },
    {"id" : 106, "nombre" : "Maria Angel", "nombreCompleto" : "Maria Angel ", "mensaje" : "" },
    {"id" : 107, "nombre" : "Mona", "nombreCompleto" : "Angelica Palacio", "mensaje" : "" },
    {"id" : 108, "nombre" : "Deimer", "nombreCompleto" : "Deimer Montiel", "mensaje" : ""},
    {"id" : 109, "nombre" : "Adriana", "nombreCompleto" : "Adriana ", "mensaje" : "" },
    {"id" : 110, "nombre" : "Dona", "nombreCompleto" : "Cristian Orozco", "mensaje" : "" },
    {"id" : 111, "nombre" : "Cindy", "nombreCompleto" : "Cindy Agudelo", "mensaje" : "" },
    {"id" : 112, "nombre" : "Chigüi", "nombreCompleto" : "Juan David Zapata", "mensaje" : "Mas vale tarde que nunca. A pesar que en los últimos años no hemos podido compartir mucho, sabes que sos un gran amigo, una de las mejores personas que conozco y un gran referente en mi vida profesional." },
    {"id" : 113, "nombre" : "Pablo", "nombreCompleto" : "Juan Pablo Gomez", "mensaje" : "" },
    {"id" : 114, "nombre" : "Tiven", "nombreCompleto" : "Estiven  Sanchez", "mensaje" : "" },
    {"id" : 115, "nombre" : "Mike", "nombreCompleto" : "Mike Monsalve", "mensaje" : "" },
    {"id" : 116, "nombre" : "Jorus", "nombreCompleto" : "Juan Mariaca", "mensaje" : "" },
    {"id" : 117, "nombre" : "Marinela", "nombreCompleto" : "Marinela Giraldo", "mensaje" : "" },
    {"id" : 118, "nombre" : "Kenier", "nombreCompleto" : "Kenier Rivera", "mensaje" : "" },
    {"id" : 119, "nombre" : "Juliana", "nombreCompleto" : "Juliana Quintero", "mensaje" : "" },
    {"id" : 120, "nombre" : "Lina", "nombreCompleto" : "Lina Rivera", "mensaje" : "" },
    {"id" : 121, "nombre" : "Maria Camila", "nombreCompleto" : "Maria Camila ", "mensaje" : "" },
    {"id" : 122, "nombre" : "Busta", "nombreCompleto" : "Alejandro Bustamante", "mensaje" : "" },
    {"id" : 123, "nombre" : "Sirleny", "nombreCompleto" : "Sirleny Rivera", "mensaje" : "" },
    {"id" : 124, "nombre" : "Choco", "nombreCompleto" : "Daniel Cano", "mensaje" : "¡Mas vale tarde, que nunca!" },
    {"id" : 125, "nombre" : "Luisa", "nombreCompleto" : "Luisa Fernanda Posada", "mensaje" : "¡Mas vale tarde, que nunca!" },
    {"id" : 126, "nombre" : "Vero", "nombreCompleto" : "Veronica Arredondo", "mensaje" : "" },
    {"id" : 127, "nombre" : "Alejandra", "nombreCompleto" : "Alejandra", "mensaje" : "" },
    {"id" : 131, "nombre" : "Caro", "nombreCompleto" : "Carolina Rivera", "mensaje" : "" },
    {"id" : 128, "nombre" : "Valentina", "nombreCompleto" : "Valentina Velez", "mensaje" : "" },
    {"id" : 129, "nombre" : "Johana", "nombreCompleto" : "Johana Rivera", "mensaje" : "" },
    {"id" : 130, "nombre" : "Salome", "nombreCompleto" : "Salome", "mensaje" : "" },
    {"id" : 132, "nombre" : "Wilmar", "nombreCompleto" : "Wilmar Castaño", "mensaje" : "" },
    {"id" : 133, "nombre" : "Marcela", "nombreCompleto" : "Marcela", "mensaje" : "" },
    {"id" : 134, "nombre" : "Daniel", "nombreCompleto" : "Daniel Martinez", "mensaje" : "" },
    {"id" : 135, "nombre" : "Jorge Mario", "nombreCompleto" : "Jorge Mario Cardona", "mensaje" : "" },
    {"id" : 136, "nombre" : "Alejo", "nombreCompleto" : "Alejandro Ochoa", "mensaje" : "" },
    {"id" : 137, "nombre" : "Johana", "nombreCompleto" : "Johana Sanabria", "mensaje" : "" },
]



// Obtener el parámetro de la URL
const param = url.searchParams.get("invitado");

let nombre = null;
let invitadoEncontrado = false;
let nombreCompleto = null;
let mensaje = "";


listInvitados.forEach(function(invitado) {
    if(invitado.id === parseInt(param)) {
        nombre = invitado.nombre;
        nombreCompleto = invitado.nombreCompleto;
        mensaje = invitado.mensaje
        invitadoEncontrado = true;
    }
});


const divsInvitados = document.getElementsByName("invitado");



if(invitadoEncontrado) {
    divBody.hidden = false;
}
 

for (const miDiv of divsInvitados) {
    miDiv.innerHTML = "Hola " + (nombre ? nombre : "");
}

const divConfirmarAsistencia = document.getElementById("confirmar-asistencia")

divConfirmarAsistencia.innerHTML = "Invitación exclusiva para " + nombreCompleto 

const divMensaje = document.getElementById("mensaje-personalizado")

if(mensaje !== "") {
    divMensaje.innerHTML = mensaje
} else {
    divMensaje.innerHTML = "Dicen que cuando uno realmente deja de buscar es donde encuentra y creo que esta frase se acomoda más a nuestra historia que ninguna";
}



