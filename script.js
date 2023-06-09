let Breakfast
Breakfast = []
let Brunch
Brunch = []
let Lunch
Lunch = []
let Snack
Snack = []
let Dinner
Dinner = []
let dishArray
dishArray = []
let sum_calories
sum_calories = 0
let sum_proteins
sum_proteins = 0
let sum_fats
sum_fats = 0
let sum_carbo
sum_carbo = 0

let breakfast_sum_calories
breakfast_sum_calories = 0
let brunch_sum_calories
brunch_sum_calories = 0
let lunch_sum_calories
lunch_sum_calories = 0
let snack_sum_calories
snack_sum_calories = 0
let dinner_sum_calories
dinner_sum_calories = 0

let breakfast_sum_proteins
breakfast_sum_proteins = 0
let brunch_sum_proteins
brunch_sum_proteins = 0
let lunch_sum_proteins
lunch_sum_proteins = 0
let snack_sum_proteins
snack_sum_proteins = 0
let dinner_sum_proteins
dinner_sum_proteins = 0

let breakfast_sum_fats
breakfast_sum_fats = 0
let brunch_sum_fats
brunch_sum_fats = 0
let lunch_sum_fats
lunch_sum_fats = 0
let snack_sum_fats
snack_sum_fats = 0
let dinner_sum_fats
dinner_sum_fats = 0

let breakfast_sum_carbs
breakfast_sum_carbs = 0
let brunch_sum_carbs
brunch_sum_carbs = 0
let lunch_sum_carbs
lunch_sum_carbs = 0
let snack_sum_carbs
snack_sum_carbs = 0
let dinner_sum_carbs
dinner_sum_carbs = 0


function AddDish(json) {
    meal = document.getElementById("meal").value
    if(meal == "Breakfast") {
        dishArray = []
        if(json[0] != null) {
            dishArray.push(json[0].name)
            dishArray.push(json[0].serving_size_g + "g")
            dishArray.push(" Kcal: " + json[0].calories)
            dishArray.push(" P: " + json[0].protein_g + "g")
            dishArray.push(" F: " + json[0].fat_total_g + "g")
            dishArray.push(" C: " + json[0].carbohydrates_total_g + "g")
            Breakfast.push(dishArray)
            let breakfast_div = document.getElementById("breakfast_div")
            AddToDiv(breakfast_div, dishArray)
            AddToMealSum(meal, dishArray)
        }
        else {
            alert("Enter correct name of the dish!")
        }
    }
    else if(meal == "Brunch") {
        dishArray = []
        if(json[0] != null) {
            dishArray.push(json[0].name)
            dishArray.push(json[0].serving_size_g + "g")
            dishArray.push(" Kcal: " + json[0].calories)
            dishArray.push(" P: " + json[0].protein_g + "g")
            dishArray.push(" F: " + json[0].fat_total_g + "g")
            dishArray.push(" C: " + json[0].carbohydrates_total_g + "g")
            Brunch.push(dishArray)
            let brunch_div = document.getElementById("brunch_div")
            AddToDiv(brunch_div, dishArray)
            AddToMealSum(meal, dishArray)
        }
        else {
            alert("Enter correct name of the dish!")
        }
    }
    else if(meal == "Lunch") {
        dishArray = []
        if(json[0] != null) {
            dishArray.push(json[0].name)
            dishArray.push(json[0].serving_size_g + "g")
            dishArray.push(" Kcal: " + json[0].calories)
            dishArray.push(" P: " + json[0].protein_g + "g")
            dishArray.push(" F: " + json[0].fat_total_g + "g")
            dishArray.push(" C: " + json[0].carbohydrates_total_g + "g")
            Lunch.push(dishArray)
            let lunch_div = document.getElementById("lunch_div")
            AddToDiv(lunch_div, dishArray)
            AddToMealSum(meal, dishArray)
        }
        else {
            alert("Enter correct name of the dish!")
        }
    }
    else if(meal == "Snack") {
        dishArray = []
        if(json[0] != null) {
            dishArray.push(json[0].name)
            dishArray.push(json[0].serving_size_g + "g")
            dishArray.push(" Kcal: " + json[0].calories)
            dishArray.push(" P: " + json[0].protein_g + "g")
            dishArray.push(" F: " + json[0].fat_total_g + "g")
            dishArray.push(" C: " + json[0].carbohydrates_total_g + "g")
            Snack.push(dishArray)
            let snack_div = document.getElementById("snack_div")
            AddToDiv(snack_div, dishArray)
            AddToMealSum(meal, dishArray)
        }
        else {
            alert("Enter correct name of the dish!")
        }
    }
    else if(meal == "Dinner") {
        dishArray = []
        if(json[0] != null) {
            dishArray.push(json[0].name)
            dishArray.push(json[0].serving_size_g + "g")
            dishArray.push("Kcal: " + json[0].calories)
            dishArray.push("P: " + json[0].protein_g + "g ")
            dishArray.push("F: " + json[0].fat_total_g + "g ")
            dishArray.push("C: " + json[0].carbohydrates_total_g + "g ")
            Dinner.push(dishArray)
            let dinner_div = document.getElementById("dinner_div")
            AddToDiv(dinner_div, dishArray)
            AddToMealSum(meal, dishArray)
        }
        else {
            alert("Enter correct name of the dish!")
        }
    }
    else {
        alert("Choose a meal to add dish!")
    }
}

function AddToDiv(div, dishList) {
    div.innerHTML += "<b>" + dishList[0] + "</b><br>"
    div.innerHTML += dishList[1] + "<br>"
    let macros_div = document.createElement("div")
    macros_div.id = "macros_div_id"
    macros_div.innerHTML += dishList[2]
    macros_div.innerHTML += dishList[3]
    macros_div.innerHTML += dishList[4]
    macros_div.innerHTML += dishList[5]
    div.appendChild(macros_div)
    AddToSum(dishList)
}
function AddToSum(dishList) {
    let calories_span = document.getElementById("calories_value")
    let proteins_span = document.getElementById("prot_value")
    let fats_span = document.getElementById("fat_value")
    let carbo_span = document.getElementById("carbo_value")

    let dish_kcal = dishList[2].replace(/\D/g, "")
    let dish_prot = dishList[3].replace(/\D/g, "")
    let dish_fat = dishList[4].replace(/\D/g, "")
    let dish_carbo = dishList[5].replace(/\D/g, "")

    let num_dish_kcal = dish_kcal.replace(/.$/, "")
    sum_calories += Number(num_dish_kcal)
    calories_span.innerHTML = "<b>" + sum_calories + "</b>"

    let num_dish_prot = dish_prot.replace(/.$/, "")
    sum_proteins += Number(num_dish_prot)
    proteins_span.innerHTML = "<b>" + sum_proteins + "</b>"
    
    let num_dish_fat = dish_fat.replace(/.$/, "")
    sum_fats += Number(num_dish_fat)
    fats_span.innerHTML = "<b>" + sum_fats + "</b>"
    
    let num_dish_carbo = dish_carbo.replace(/.$/, "")
    sum_carbo += Number(num_dish_carbo)
    carbo_span.innerHTML = "<b>" + sum_carbo + "</b>"
}

function SaveGoals() {
    let input_calories = document.getElementById("input_calories").value
    let input_proteins = document.getElementById("input_proteins").value
    let input_fats = document.getElementById("input_fats").value
    let input_carbs = document.getElementById("input_carbs").value

    localStorage.setItem("calories", input_calories)
    localStorage.setItem("proteins", input_proteins)
    localStorage.setItem("fats", input_fats)
    localStorage.setItem("carbs", input_carbs)
}

function DisplayGoals() {
    let input_calories = localStorage.getItem("calories")
    let input_proteins = localStorage.getItem("proteins")
    let input_fats = localStorage.getItem("fats")
    let input_carbs = localStorage.getItem("carbs")

    let calories_goal = document.getElementById("calories_goal")
    let prot_goal = document.getElementById("prot_goal")
    let fat_goal = document.getElementById("fat_goal")
    let carbo_goal = document.getElementById("carbo_goal")

    
    calories_goal.innerHTML = "<b>" + input_calories + "</b>" + " kcal"
    prot_goal.innerHTML = "<b>" + input_proteins + "</b>" + " g"
    fat_goal.innerHTML = "<b>" + input_fats + "</b>" + " g"
    carbo_goal.innerHTML = "<b>" + input_carbs + "</b>" + " g"
}

function AddToMealSum(meal, dishArray) {
    if(meal == "Breakfast") {
        let breakfast_span = document.getElementById("breakfast_span")
        breakfast_span.innerHTML = ""
        let dish_kcal = dishArray[2].replace(/\D/g, "")
        let num_dish_kcal = dish_kcal.replace(/.$/, "")
        breakfast_sum_calories += Number(num_dish_kcal)
        breakfast_span.innerHTML += breakfast_sum_calories + " kcal"

        
        let dish_prot = dishArray[3].replace(/\D/g, "")
        let num_dish_prot = dish_prot.replace(/.$/, "")
        breakfast_sum_proteins += Number(num_dish_prot)
        breakfast_span.innerHTML += " " + breakfast_sum_proteins + " g"
        
        let dish_fat = dishArray[4].replace(/\D/g, "")
        let num_dish_fat = dish_fat.replace(/.$/, "")
        breakfast_sum_fats += Number(num_dish_fat)
        breakfast_span.innerHTML += " " + breakfast_sum_fats + " g"
        
        let dish_carbo = dishArray[4].replace(/\D/g, "")
        let num_dish_carbo = dish_carbo.replace(/.$/, "")
        breakfast_sum_carbs += Number(num_dish_carbo)
        breakfast_span.innerHTML += " " + breakfast_sum_carbs + " g"
    }
    else if(meal == "Brunch") {
        let brunch_span = document.getElementById("brunch_span")
        brunch_span.innerHTML = ""
        let dish_kcal = dishArray[2].replace(/\D/g, "")
        let num_dish_kcal = dish_kcal.replace(/.$/, "")
        brunch_sum_calories += Number(num_dish_kcal)
        brunch_span.innerHTML += brunch_sum_calories + " kcal"

        
        let dish_prot = dishArray[3].replace(/\D/g, "")
        let num_dish_prot = dish_prot.replace(/.$/, "")
        brunch_sum_proteins += Number(num_dish_prot)
        brunch_span.innerHTML += " " + brunch_sum_proteins + " g"
        
        let dish_fat = dishArray[4].replace(/\D/g, "")
        let num_dish_fat = dish_fat.replace(/.$/, "")
        brunch_sum_fats += Number(num_dish_fat)
        brunch_span.innerHTML += " " + brunch_sum_fats + " g"
        
        let dish_carbo = dishArray[4].replace(/\D/g, "")
        let num_dish_carbo = dish_carbo.replace(/.$/, "")
        brunch_sum_carbs += Number(num_dish_carbo)
        brunch_span.innerHTML += " " + brunch_sum_carbs + " g"
    }
    else if(meal == "Lunch") {
        let lunch_span = document.getElementById("lunch_span")
        lunch_span.innerHTML = ""
        let dish_kcal = dishArray[2].replace(/\D/g, "")
        let num_dish_kcal = dish_kcal.replace(/.$/, "")
        lunch_sum_calories += Number(num_dish_kcal)
        lunch_span.innerHTML += lunch_sum_calories + " kcal"

        
        let dish_prot = dishArray[3].replace(/\D/g, "")
        let num_dish_prot = dish_prot.replace(/.$/, "")
        lunch_sum_proteins += Number(num_dish_prot)
        lunch_span.innerHTML += " " + lunch_sum_proteins + " g"
        
        let dish_fat = dishArray[4].replace(/\D/g, "")
        let num_dish_fat = dish_fat.replace(/.$/, "")
        lunch_sum_fats += Number(num_dish_fat)
        lunch_span.innerHTML += " " + lunch_sum_fats + " g"
        
        let dish_carbo = dishArray[4].replace(/\D/g, "")
        let num_dish_carbo = dish_carbo.replace(/.$/, "")
        lunch_sum_carbs += Number(num_dish_carbo)
        lunch_span.innerHTML += " " + lunch_sum_carbs + " g"
    }
    else if(meal == "Snack") {
        let snack_span = document.getElementById("snack_span")
        snack_span.innerHTML = ""
        let dish_kcal = dishArray[2].replace(/\D/g, "")
        let num_dish_kcal = dish_kcal.replace(/.$/, "")
        snack_sum_calories += Number(num_dish_kcal)
        snack_span.innerHTML += snack_sum_calories + " kcal"

        
        let dish_prot = dishArray[3].replace(/\D/g, "")
        let num_dish_prot = dish_prot.replace(/.$/, "")
        snack_sum_proteins += Number(num_dish_prot)
        snack_span.innerHTML += " " + snack_sum_proteins + " g"
        
        let dish_fat = dishArray[4].replace(/\D/g, "")
        let num_dish_fat = dish_fat.replace(/.$/, "")
        snack_sum_fats += Number(num_dish_fat)
        snack_span.innerHTML += " " + snack_sum_fats + " g"
        
        let dish_carbo = dishArray[4].replace(/\D/g, "")
        let num_dish_carbo = dish_carbo.replace(/.$/, "")
        snack_sum_carbs += Number(num_dish_carbo)
        snack_span.innerHTML += " " + snack_sum_carbs + " g"
    }
    else if(meal == "Dinner") {
        let dinner_span = document.getElementById("dinner_span")
        dinner_span.innerHTML = ""
        let dish_kcal = dishArray[2].replace(/\D/g, "")
        let num_dish_kcal = dish_kcal.replace(/.$/, "")
        dinner_sum_calories += Number(num_dish_kcal)
        dinner_span.innerHTML += dinner_sum_calories + " kcal"

        
        let dish_prot = dishArray[3].replace(/\D/g, "")
        let num_dish_prot = dish_prot.replace(/.$/, "")
        dinner_sum_proteins += Number(num_dish_prot)
        dinner_span.innerHTML += " " + dinner_sum_proteins + " g"
        
        let dish_fat = dishArray[4].replace(/\D/g, "")
        let num_dish_fat = dish_fat.replace(/.$/, "")
        dinner_sum_fats += Number(num_dish_fat)
        dinner_span.innerHTML += " " + dinner_sum_fats + " g"
        
        let dish_carbo = dishArray[4].replace(/\D/g, "")
        let num_dish_carbo = dish_carbo.replace(/.$/, "")
        dinner_sum_carbs += Number(num_dish_carbo)
        dinner_span.innerHTML += " " + dinner_sum_carbs + " g"
    }
}

async function APIrequest() {
    let dish = document.getElementById("dish_input").value
    const res = await fetch(
        link = "https://api.api-ninjas.com/v1/nutrition?query=" + dish
            ,
              {headers: {'X-Api-Key': 'RhXyk5xXSCUIyd7/y6PNVw==JWAtPm1sqpnlSQEP'}}
           )

    json = await res.json()
    AddDish(json)
}