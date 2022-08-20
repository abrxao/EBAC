// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
   
   let destaques = $('#featured') // id
   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-outline-primary stretch-link');   
   
   
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')
   
   /*
   * Manipulação de eventos
   */
   /*$('.featured-item a').on('blur', function(event){
      
      event.preventDefault();
      
      alert('Produto esgotado');
      
   })*/
   
   $('.nav-modal-open').on('click', function(e){
      
      e.preventDefault();
      
      let elem = $(this).attr('rel');
      
      $('.modal-body').html($('#'+elem).html());
      
      $('.modal-header h5.modal-title').html($(this).text());
      
      let myModal = new bootstrap.Modal($('#modelId'));
      
      myModal.show();
   });   
   
   
   var disableButton = (e) => {
      $('#botao').prop('disabled', true);
      $('#enviou').show();
   };
   
   var ableButton = (e) => {
      $('#botao').prop('disabled', false);
      $('#enviou').hide();
   };
   
   
   function cpfValid(cpf){
      if(cpf.val()==('')){

         return true;

      }else{
         let cepf = $(cpf).val();
         const cpfLimpo = cepf.replace("-","").replaceAll(".","");   
         var soma = 0;
         let j = 9, d1,d2;
         
         for(let i = 0; i < 9; i++) {
            soma+=parseInt(cpfLimpo[i])*(i+1);         
         }
         if(soma%11!=10){
            
            d1=soma%11;
            
         }else{d1=0}
         
         soma=0;
         
         for(let i = 9; i >=0; i--) {
            soma+=parseInt(cpfLimpo[i])*j;
            j--;
         }
         
         if(soma%11!=10){
            
            d2=soma%11;
            
         }else
         {d2=0}
         
         
         if(cpfLimpo[9]==d1 && cpfLimpo[10]==d2){
            cpf.removeClass('invalido');
            
            cpf.parent().find('.text-muted').hide();

            ableButton();
            
            return true;
         }
         else
         {
            cpf.addClass('invalido');
                        
            cpf.parent().find('.text-muted').show();

            disableButton();
            
            return false;
         }
      }
   }
   function validate(elem){
      
      if(elem.val() == ''){
         
         elem.addClass('invalido');
         
         elem.parent().find('.text-muted').show();
         
         disableButton();
         
         return false;
         
      }else{
         
         elem.removeClass('invalido');
         
         elem.parent().find('.text-muted').hide();         
         
         ableButton();

         return true;
      }
   }
   
   function validatePhone(elem){
      
      if(elem.val() == '' || elem.val().length!=14){
         
         elem.addClass('invalido');
         
         elem.parent().find('.text-muted').show();
         
         disableButton();
         
         return false;
         
      }else{
         
         elem.removeClass('invalido');
         
         elem.parent().find('.text-muted').hide();        
         
         ableButton();
         
         return true;
      }
   }
   
   $('body').on('blur', '#nome', function(){
      validate($(this));
   })
   
   $('body').on('blur', '#mail', function(){
      validate($(this));
   })
   
   $('body').on('submit', '.modal-body .form', function(e){    
      
      const nome = $('#nome');
      const email = $('#mail');
      
      validate(nome);
      validate(email); 
      
      if(nome.hasClass('invalido') || email.hasClass('invalido')){
         
         return false;
         
      }else {
         return true;
      }
   })
   
   $('body').on('blur', '#cep', function(){
      validate($(this));
      $('#cep').mask('00000-000');
      let link ='https://viacep.com.br/ws/'+$('#cep').val()+'/json/'
      $.get(link, function(dados, status){
         $('#cidade').val(dados.localidade);
         $('#uf').val(dados.uf);
      });
   });
   
   $('body').on('blur', '#phone', function(){
      validatePhone($(this));
      $('#phone').mask('(00)00000-0000');
   });
   
   $('body').on('blur', '#cpf', function(){
      
      cpfValid($(this));
      
      $('#cpf').mask('000.000.000-00');      
      
   });
   
   if ($(window).width() < 768){
      $('#carrosel').removeClass('owl-carousel');
      $('.owl-carousel').owlCarousel('destroy');
      
   }
   
   $(window).resize(function(){
      if ($(window).width() < 768){           
         $('.owl-carousel').owlCarousel('destroy');
         $('#carrosel').removeClass('owl-carousel');   
      }
      else
      {
         $('#carrosel').addClass('owl-carousel');
         $('.owl-carousel').owlCarousel({      
            loop:true,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false,
            responsive:{
               0:{
                  items:1.2
               },768:{items:3.2}
            }
         });
      }
   });      
   
   $('.owl-carousel').owlCarousel({
      
      loop:true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: false,
      responsive:{
         0:{
            items:1.2
         },767:{items:3.2}
      }
   });

 
});


