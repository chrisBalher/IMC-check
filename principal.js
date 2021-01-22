

        function mostrarPeso(nuevoPesoSli) {
            document.getElementById('entradaPeso').value = nuevoPesoSli;
        }
        function insertarPeso(nuevoPeso) {
            document.getElementById('sliderPeso').value = nuevoPeso;
        }
        function mostrarAltura(nuevaAlturaSli) {
            document.getElementById('entradaAltura').value = nuevaAlturaSli;
        }
        function insertarAltura(nuevaAltura) {
            document.getElementById('sliderAltura').value = nuevaAltura;
        }
        function mostrarPerimetro(nuevoPerimetroSli) {
            document.getElementById('entradaPerimetro').value = nuevoPerimetroSli;
        }
        function insertarPerimetro(nuevoPerimetro) {
            document.getElementById('sliderPerimetro').value = nuevoPerimetro;
        }

        // Calcular BMI
        function calculateBmi() {
            var weight= document.getElementById("sliderPeso").value
            var height = (document.getElementById("sliderAltura").value) / 100;
            var realbmi = (weight) / Math.pow(height, 2);
            var yourbmi = document.getElementById("yourbmi");
            var mensajeSalida1 = document.getElementById("evaluationMessage1");
            var mensajeSalida2 = document.getElementById("evaluationMessage2");
            var mensajeSalida4 = document.getElementById("evaluationMessage4");
            var roundedBmi = realbmi.toFixed(1);
            mensajeSalida2.innerHTML = ""; // Clear message before calculating new BMI
            yourbmi.innerHTML = " " + roundedBmi; // Print BMI
            // Appropriate message for your BMI rating
            
            if (roundedBmi < 16) {
                mensajeSalida1.innerHTML = "Delgadez Grado III";
                mensajeSalida2.innerHTML = "Riesgo elevado de morbilidad y mortalidad.";
                mensajeSalida4.innerHTML= " RECOMENDACION: Asistir a consulta médica para descartar alguna patologla asociada a su estado nutricional. De ser " +
                    "necesario asistir a evaluación psicológica si existe presunción diagnóstica de " + 
                    "trastornos del comportamiento; y a una consulta nutricíonal para lograr la recuperación nutricional.";
            }
            else if (roundedBmi <17 && roundedBmi >=16) {
                mensajeSalida1.innerHTML = "Delgadez Grado II";
                mensajeSalida2.innerHTML = "Bajo riesgo de comorbilidad para enfermades no transmisibles pero alto riesgo en otros problemas clínicos, digestivos, pulmonares, entre otros."
                mensajeSalida4.innerHTML = "RECOMENDACION: Asistir a consulta médica para descartar alguna patologla asociada a su estado nutricional. De ser " +
                    "necesario asistir a evaluación psicológica si existe presunción diagnóstica de " +
                    "trastornos del comportamiento; y a una consulta nutricíonal para lograr la recuperación nutricional.";
            } else if (roundedBmi < 18.5 && roundedBmi >= 17) {
                mensajeSalida1.innerHTML = "Delgadez Grado I";
                mensajeSalida2.innerHTML = "Bajo riesgo de comorbilidad para enfermades no transmisibles pero alto riesgo en otros problemas clínicos, digestivos, pulmonares, entre otros." 
                mensajeSalida4.innerHTML= "RECOMENDACION: Asistir a consulta médica para descartar alguna patologla asociada a su estado nutricional. De ser " +
                    "necesario asistir a evaluación psicológica si existe presunción diagnóstica de " +
                    "trastornos del comportamiento; y a una consulta nutricíonal para lograr la recuperación nutricional.";
            } else if (roundedBmi < 25 && roundedBmi >= 18.5) {
                mensajeSalida1.innerHTML = "Normal";
                mensajeSalida2.innerHTML = "Bajo riesgo de comorbilidad y mortalidad." 
                mensajeSalida4.innerHTML= "RECOMENDACION: Mantener el peso de manera constante. Desarrollar acciones de promoción de la salud como: orientación básica, consejerla nutricional, sesiones educatívas o demostrativas de salud, alimentación e higiene, fomento de estilo de vida saludable y la evaluación nutricional por lo menos una vez al año."
            } else if (roundedBmi < 30 && roundedBmi >= 25) {
                mensajeSalida1.innerHTML = "Sobrepeso (pre Obeso)";
                mensajeSalida2.innerHTML = "MODERADO RIESGO de comorbilidad, principalmente de las enfermedades crónicas no transmisibles como: diabetes mellitus tipo 2, enfermedades cardiovasculares incluida la hipertensión arterial, enfermedad coronaria, cáncer, entre otras. " 
                mensajeSalida4.innerHTML= " RECOMENDACION:  Perder peso progresivamente (0.5 kg por semana), buscar llevar un estilo de vida más saludable (realizar actividad física, prácticas de alimentación adecuadas, eliminación del consumo de tabaco, evitar la ingesta de alcohol, entre otros). Asistir a consulta médica, psicológica y nutricional para evaluación y descarte de patologías asociada al estado nutricional. ";
            } else if (roundedBmi < 35 && roundedBmi >= 30) {
                mensajeSalida1.innerHTML = "Obesidad Grado I";
                mensajeSalida2.innerHTML = "ALTO RIESGO de comorbilidad, principalmente de las enfermedades crónicas no transmisibles como: diabetes mellitus tipo 2, enfermedades cardiovasculares incluida la hipertensión arterial, enfermedad coronaria, cáncer, entre otras. "
                mensajeSalida4.innerHTML= "RECOMENDACION:  Urgentemente perder peso de manera progresiva. Si no hay factores adicionales de riesgo debe disminuir entre 0.5 a 1.0 kg/semana, promovida con una alimentación balanceada y controlada por el médico y nutricionista. Buscar llevar un estilo de vida más saludable (realizar actividad física, prácticas de alimentación adecuadas, eliminación del consumo de tabaco, evitar la ingesta de alcohol, entre otros). Asistir a consulta médica, psicológica y nutricional para evaluación y descarte de patologías asociada al estado nutricional. ";
            } else if (roundedBmi < 40 && roundedBmi >= 35) {
                mensajeSalida1.innerHTML = "Obesidad Grado II";
                mensajeSalida2.innerHTML = "SEVERO RIESGO de comorbilidad, principalmente de las enfermedades crónicas no transmisibles como: diabetes mellitus tipo 2, enfermedades cardiovasculares incluida la hipertensión arterial, enfermedad coronaria, cáncer, entre otras. "  
                mensajeSalida4.innerHTML= "RECOMENDACION: Urgentemente perder peso de manera progresiva. Si no hay factores adicionales de riesgo debe disminuir entre 0.5 a 1.0 kg/semana, promovida con una alimentación balanceada y controlada por el médico y nutricionista. Buscar llevar un estilo de vida más saludable (realizar actividad física, prácticas de alimentación adecuadas, eliminación del consumo de tabaco, evitar la ingesta de alcohol, entre otros). Asistir a consulta médica, psicológica y nutricional para evaluación y descarte de patologías asociada al estado nutricional. ";
            } else if (roundedBmi >= 40) {
                mensajeSalida1.innerHTML = "Obesidad grado III";
                mensajeSalida2.innerHTML = "MUY SEVERO RIESGO de de comorbilidad, principalmente de las enfermedades crónicas no transmisibles como: diabetes mellitus tipo 2, enfermedades cardiovasculares incluida la hipertensión arterial, enfermedad coronaria, cáncer, entre otras." 
                mensajeSalida4.innerHTML= " RECOMENDACION: El objetivo principal es reducir el peso exagerado; para ello es necesario realizar el descarte de patologra asociada al estado nutricional. Considerando las medidas intensivas y opciones como el tratamiento quirúrgico de la obesidad, que deberá ser referido a un establecimiento de mayor complejidad para el manejo multidisciplinario según sea el caso";
            }
        }
        function analizarPA() {
            var perimeter = document.getElementById("sliderPerimetro").value;
            var maleCheck = document.getElementById('male').checked;
            var mensajeSalida3 = document.getElementById("evaluationMessage3");

            if (maleCheck==true && perimeter<=94) {
                mensajeSalida3.innerHTML = "Distribución NORMAL de grasa abdominal, lo cual representa un BAJO incremento del riesgo de comorbilidad";
            }else if (maleCheck==true && perimeter>=94 && perimeter<=102) {
                mensajeSalida3.innerHTML = "MODERADA acumulación de grasa abdominal, lo cual representa un ALTO incremento en el riesgo de comorbilidad";
            }else if (maleCheck == true && perimeter >= 102) {
                mensajeSalida3.innerHTML = "ALTA acumulación de grasa abdominal, lo cual representa un MUY ALTO incremento en el riesgo de comorbilidad";
            }else if (maleCheck == false && perimeter <= 80) {
                mensajeSalida3.innerHTML = "Distribución NORMAL de grasa abdominal, lo cual representa un BAJO incremento del riesgo de comorbilidad";
            } else if (maleCheck == false && perimeter >= 80 && perimeter <= 88) {
                mensajeSalida3.innerHTML = "MODERADA acumulación de grasa abdominal, lo cual representa un ALTO incremento en el riesgo de comorbilidad";
            } else if (maleCheck == false && perimeter >= 88) {
                mensajeSalida3.innerHTML = "ALTA acumulación de grasa abdominal, lo cual representa un MUY ALTO incremento en el riesgo de comorbilidad";
            }
        }
 