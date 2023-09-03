

const navMenu = document.getElementById ('nav-menu'),
        navToggle = document.getElementById ('nav-toggle'),
        navClose = document.getElementById ('nav-close');

        


if(navToggle){
    navToggle.addEventListener('click', ( ) =>{
        navMenu.classList.add('show-menu')
    })
    
}


if(navClose){
    navClose.addEventListener('click', ( ) =>{
        navMenu.classList.remove('show-menu')
    })
    
}

const navLink = document.querySelectorAll('.nav--link')
const linkAction = () => {
    const navMenu = document.getElementById ('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

const scrollJeader = ( )=>{
    const heder = document.getElementById('header')
    this.scrollY>= 50 ?heder.classList.add('bg-header')
                        :heder.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollJeader)

// ====================  calculate  ======================================================================


const calculateForm = document.getElementById("calculate-form"),
calculateCm = document.getElementById("calculate-cm"),
calculateKg = document.getElementById("calculate-kg"),
calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
    e.preventDefault()
    if(calculateCm.value ===""|| calculateKg.value ===""){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'fill in the height and weight'

        setTimeout(() =>{
            calculateMessage.textContent ='' 
        },3000)
    }
    else{
        const cm = calculateCm.value /100
        const kg = calculateKg.value
        const bmi = Math.round(kg / (cm * cm))
        
            
            

        if(bmi < 18.5 ){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent=`your BMI is ${bmi} and you are skinny`
        }   else if(bmi< 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent=`your BMI is ${bmi} and you are healthy`
        }     else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent=`your BMI is ${bmi} and you are over weight`
        }
        calculateCm.value = ""
        calculateKg.value = ""
        setTimeout(() => {
            calculateMessage.textContent = ""
        },5000)

    }
}
calculateForm.addEventListener('submit',calculateBmi )



// ========================================  email js  ======================================================