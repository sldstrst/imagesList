const app = new Vue({
    el: '#app',
    data: {
      images:
        [
         'https://picsum.photos/325/400/', 
         'https://picsum.photos/118/400',
         'https://picsum.photos/412/400',
         'https://picsum.photos/150/400',
         'https://picsum.photos/93/400'
         ],
      idImagesCurrent: 2,
      newImg: ''
    },
    methods: {
        imagesListNext:function(idImagesCurrent){
            if (this.idImagesCurrent < this.images.length)
            {
            this.idImagesCurrent = this.idImagesCurrent + 1       
            }  
        },
        imagesListPrev:function(idImagesCurrent)
        {            
            if (this.idImagesCurrent > 0 )
            {
            this.idImagesCurrent = this.idImagesCurrent - 1
            }
        },
        imagesListAdd:function(){
            this.images.push(this.newImg)
        }
    }    
     
  });

  //   https://picsum.photos/105/400