
    const mainFunction = () =>{

        const imageChange = function(){

        const thumbanills = document.querySelectorAll('.img-container img');
        let mainImg = document.querySelector('#mainImg');
        let popupImg = document.querySelector('#popupImg');

        let counter = 0;

        for(i=0; i<thumbanills.length; i++){

            thumbanills[i].addEventListener('click', function() {
               
                mainImg.src = this.src;
                popupImg.src = this.src;

            });

        }

        
    };

    
    
    const popUp = () => {

        const shopNow = document.querySelector('.shop-now');
        const shopBtn = document.querySelector('.shopBtn');
        const closeBtn = document.querySelector('.close');
        const closedownBtn = document.querySelector('#closeBtn');
        const closeButton = document.querySelector('#closeButton');
        const signIn = document.querySelector('#signIn');
        const contactForm = document.querySelector('.form-section');
        const signUp = document.querySelector('#join');
        const signupForm = document.querySelector('.signup-section');
        

        shopBtn.addEventListener('click', () =>{
            shopNow.style.display = 'flex';
        });

        closeBtn.addEventListener('click', ()=> {
            shopNow.style.display = 'none';
        });

        signIn.addEventListener('click', ()=>{
            contactForm.style.display = 'flex';
        });

        closeButton.addEventListener('click', ()=> {
            contactForm.style.display = 'none';
        });

        signUp.addEventListener('click', () =>{
            signupForm.style.display = 'flex';
        });

        
        closedownBtn.addEventListener('click', ()=> {
            signupForm.style.display = 'none';
        });


    }

   

    const sliderBtn = () =>{

        
        const rightBtn = document.querySelector('.right-arrow');
        const leftBtn = document.querySelector('.left-arrow')
        const slider = document.querySelector('.second-page');
       

        leftBtn.addEventListener('click', ()=> {
            
            slider.style.transition = 'all 5s ease';
            slider.scrollLeft -= 1200 ;

        });

        rightBtn.addEventListener('click', () =>{
            slider.scrollLeft += 1200;
        });
 
    };

    const activesizeBtn = () =>{
        
        const sizeBtns = document.querySelectorAll('.shoe-size button');
        const activeBtn = document.querySelectorAll('.active');

        let counter = 0;

        for(i=0; i < sizeBtns.length; i++){

            sizeBtns[i].addEventListener('click', function() {
                
                

                console.log(activeBtn);            
                if(activeBtn.length>0){
                activeBtn[0].classList.remove('active');
            } 
            
            this.classList.add('active');
            
            
            });
        }

    }


    const  addremoveBtn = ()=>{
        
        // Remove from Cart Button

            const removeBtn = ()=>{
            const remove = document.querySelectorAll('.remove-btn');
          //  console.log(remove);

         for(i=0; i<remove.length; i++){
             remove[i].addEventListener('click', function(){
                    this.parentElement.parentElement.remove();
                    updateCartTotal();
             });
         }

        };

       
        // Add To Cart function


        const addtocartButtons = document.querySelectorAll('.addToCart');
       
        for( i=0; i<addtocartButtons.length; i++){
            let button = addtocartButtons[i];
            
            button.addEventListener('click', ()=>{
                const shopItem = button.parentElement.parentElement;
           
                const title = shopItem.querySelectorAll('.price h2')[0].innerText;
                const cartprice = shopItem.querySelectorAll('.price h4')[0].innerText;
                const imgSrc = shopItem.querySelectorAll('#popupImg')[0].src;

                
                   console.log(title);
                
            const addtocartRow = document.createElement('div');
                
            const cartItemTitle = document.querySelectorAll('.title')[0];
            
           
            for( i=0; i<cartItemTitle.length; i++){
            const cartTitle = cartItemTitle[i];
            console.log(cartTitle)
                if(cartTitle.innerHTML == title){
                    alert('adsad')
                    return;
                }
            }
            const cartItems = document.querySelector('.cartRowOverflow');
            const cartRowContents = `
            <div class="cart-row">
            <div class="photo">
                <img src="${imgSrc}" alt="" style="width: 200px;">
            </div>
                <div class="title"> ${title} </div>
                    <div class="cart-price">  ${cartprice}  </div>
                <div class="quantity"> <input type="number" value="1" class="quantity-input"> 
                 <button class="remove-btn"> Remove </button> </div>
        </div>
        `
            addtocartRow.innerHTML = cartRowContents;
            cartItems.append(addtocartRow);
            addtocartRow.classList.add('.cart-row');

            

            });
        }


// Yo tala ko le Last Element ni lidaiinaaaaa 

        const updateCartTotal = ()=>{
        const cartItemsContainer = document.querySelector('.cart-items')[0];
        const cartRows = document.querySelectorAll('.cart-row');
       // console.log(cartRows)
        let total = 0;
        
        
        for( i=0; i < cartRows.length; i++){
            let cartRow = cartRows[i];
            let productprice = cartRow.querySelectorAll('.cart-price')[0];

            let quantityElement = cartRow.querySelectorAll('.quantity .quantity-input')[0];
            let price = parseFloat(productprice.innerHTML.replace('$', ' '));
            //console.log(price)
            let quantity = quantityElement.value;

           total = total + (price*quantity);   
        }
        total = Math.round(total * 100) / 100;
        const totalPrice = document.querySelector('.total');
        totalPrice.innerText = '$' + total;

    };


    const valueChange = ()=>{
        let inputQuantity = document.querySelectorAll('.quantity-input');
       // console.log(inputQuantity)
            for(i=0; i<inputQuantity.length; i++){
                let input = inputQuantity[i];

                input.addEventListener('change', function(){
                    if(isNaN(input.value) || input.value <= 0 ){
                        input.value = 1;
                    }
                    updateCartTotal();
                });
            };
        };


    removeBtn();
    valueChange()
    updateCartTotal();
    
    };




    const shopingCartmenu = ()=>{

        const cartLogo = document.querySelector('.shoping-cart');
        const cartMenu = document.querySelector('.cart');
        const cartcloseBtn = document.querySelector('.closeCart');

        cartLogo.addEventListener('click', ()=> {
            cartMenu.style.display = 'flex';
        });

        cartcloseBtn.addEventListener('click', ()=>{
            cartMenu.style.display = 'none';
        });

}


        imageChange();
        popUp();
        activesizeBtn();
        sliderBtn();
        addremoveBtn();
        shopingCartmenu();
    };
  
 
    
    mainFunction();
