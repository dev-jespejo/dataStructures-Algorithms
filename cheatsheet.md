### Hoja de Trucos para Entrevistas  
*De "Master The Coding Interview: Data Structures + Algorithms" por Andrei Neagoie*  

---

#### **Los 3 pilares de un buen código:**  
1. Legible  
2. Complejidad de Tiempo  
3. Complejidad de Espacio  

#### **Habilidades que busca el entrevistador:**  
- **Habilidades analíticas:** ¿Cómo piensas y analizas problemas?  
- **Habilidades de codificación:** ¿Escribes código limpio, simple, organizado y legible?  
- **Conocimientos técnicos:** ¿Dominas los fundamentos del puesto al que aplicas?  
- **Habilidades de comunicación:** ¿Tu personalidad encaja con la cultura de la empresa?  

---

### **Pasos para resolver un problema:**  
1. Cuando el entrevistador plantea la pregunta, escribe los puntos clave (ej. "array ordenado"). Asegúrate de tener todos los detalles y demuestra organización.  
2. Verifica dos veces: ¿Cuáles son los **inputs** y los **outputs**?  
3. ¿Qué es lo más importante del problema? ¿Tiempo, espacio, memoria? Define el objetivo principal.  
4. No hagas demasiadas preguntas innecesarias.  
5. Comienza con un enfoque ingenuo o de fuerza bruta. Habla de ello sin escribir el código. Esto demuestra tu capacidad de pensar críticamente.  
6. Explica por qué este enfoque no es el mejor (ej. O(n²) o mayor, poco legible, etc.).  
7. Revisa tu enfoque, comenta posibles problemas como repeticiones, cuellos de botella (ej. O(n²)), o trabajo innecesario. Usa toda la información proporcionada por el entrevistador.  
8. Antes de empezar a codificar, escribe los pasos que seguirás.  
9. Modulariza desde el principio. Divide el código en partes pequeñas y utiliza comentarios cuando sea necesario.  
10. Escribe el código manteniendo claridad y organización. Nunca comiences a programar sin saber cómo proceder, ya que esto puede complicar todo.  
11. Considera validaciones y casos de error: no hagas suposiciones sobre los inputs. Piensa en cómo proteger tu código de errores intencionales o accidentales.  
12. Usa nombres claros para tus variables y funciones; evita nombres confusos como `i` y `j`.  
13. Prueba tu código: verifica casos como parámetros vacíos, nulos, arreglos masivos o código asíncrono. Identifica si estás repitiendo trabajo innecesario.  
14. Discute con el entrevistador cómo podrías mejorar el código: rendimiento, enfoques alternativos, legibilidad, etc.  
15. Prepárate para preguntas adicionales sobre cómo manejarías el problema a escala o si los datos llegan como un flujo (stream).  

---

### **Lista de verificación para un buen código:**  
✅ Funciona correctamente  
✅ Buen uso de estructuras de datos  
✅ Reutilización de código / No repetir trabajo innecesario  
✅ Modular: facilita la lectura, el mantenimiento y las pruebas  
✅ Menos de O(n²): evita bucles anidados si es posible. Es preferible usar bucles separados.  
✅ Baja complejidad espacial: evita copiar arreglos grandes o causar desbordamientos de pila con recursión.  

---

### **Heurísticas para resolver preguntas:**  
- Los **Hash Maps** suelen mejorar la complejidad temporal.  
- Si tienes un arreglo ordenado, usa **árboles binarios** para alcanzar O(log N). Divide y vencerás: divide un conjunto de datos en partes más pequeñas y repite el proceso con subconjuntos.  
- Intenta ordenar los inputs.  
- Las tablas hash y la información precomputada (como arreglos ordenados) optimizan el código.  
- Considera el intercambio entre tiempo y espacio: almacenar estado adicional puede mejorar el tiempo de ejecución.  
- Sigue los consejos del entrevistador si te los proporciona.  

---

**Recuerda:**  
Comunica tu proceso de pensamiento tanto como sea posible. No te preocupes por terminar rápido. Cada parte de la entrevista cuenta.  