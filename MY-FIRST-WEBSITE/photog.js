        function discat(){
                        
                      var x =  document.getElementById("vizag");
                      if(x.style.visibility.match('h'))
				              {
										x.style.visibility="visible";

								  }
				          else 
									{	x.style.visibility="hidden";

                          }
}
		  
		  function next(){
        var k = document.getElementsByClassName("vz");
	     var p = document.getElementById("vi");
        if(k[0].src == p.src)
        {
        p.src = k[1].src;
         document.getElementById("vzprev").style.visibility="visible";     
        }
        else if(k[1].src==p.src)
        {
        p.src = k[2].src;
        }
        else if(k[2].src==p.src)
        {
        p.src = k[3].src;
        }
        else if(k[3].src==p.src)
        {
        p.src = k[4].src;
        }
        else if(k[4].src==p.src)
        {
        p.src = k[5].src;
        }
        else if(k[5].src==p.src)
        {
        p.src = k[6].src;
        } 
        else if(k[6].src==p.src)
        {
        p.src = k[7].src;
        }
        else if(k[7].src==p.src)
        {
        p.src = k[8].src;
        }
        else if(k[8].src==p.src)
        {
        p.src = k[9].src;
        }
        else if(k[9].src==p.src)
        {
            p.src = k[10].src;
            document.getElementById("vznext").style.visibility="hidden";     
        }
        
        
        return 0;


		  }
 function prev(){
        var k = document.getElementsByClassName("vz");
	     var p = document.getElementById("vi");
        
        if(k[1].src==p.src)
        {
        p.src = k[0].src;
         document.getElementById("vzprev").style.visibility="hidden"     
        }
        else if(k[2].src==p.src)
        {
        p.src = k[1].src;
        }
        else if(k[3].src==p.src)
        {
        p.src = k[2].src;
        }
        else if(k[4].src==p.src)
        {
        p.src = k[3].src;
        }
        else if(k[5].src==p.src)
        {
        p.src = k[4].src;
        } 
        else if(k[6].src==p.src)
        {
        p.src = k[5].src;
        }
        else if(k[7].src==p.src)
        {
        p.src = k[6].src;
        }
        else if(k[8].src==p.src)
        {
        p.src = k[7].src;
        }
        else if(k[9].src==p.src)
        {
            p.src = k[8].src;
        }
        else if(k[10].src==p.src)
        {
            p.src = k[9].src;        
             document.getElementById("vznext").style.visibility="visible";      
        }
        
        
        return 0;


		  }
function gilf(){
      
             document.getElementById("ugly").src  =document.getElementById("gil").src;   
     document.getElementById("gil").style.border="solid yellow 5px";
     document.getElementById("gil").style.height="120px";
     document.getElementById("gil").style.width="110px"; 

}
function rogf(){
      
             document.getElementById("ugly").src  =document.getElementById("rog").src         ;
             document.getElementById("rog").style.border="solid yellow 5px";
             document.getElementById("rog").style.height="110px";
             document.getElementById("rog").style.width="110px"; 

}
function ksf(){
      
             document.getElementById("ugly").src  =document.getElementById("ks").src         ;
  document.getElementById("ks").style.border="solid yellow 5px";
     document.getElementById("ks").style.height="110px";
     document.getElementById("ks").style.width="110px"; 

}
function lhf(){
      
             document.getElementById("ugly").src  =document.getElementById("lh").src         ;
 document.getElementById("lh").style.border="solid yellow 5px";
     document.getElementById("lh").style.height="110px";
     document.getElementById("lh").style.width="110px"; 

}
function lmf(){
      
             document.getElementById("ugly").src  =document.getElementById("lm").src         ;
 document.getElementById("lm").style.border="solid yellow 5px";
     document.getElementById("lm").style.height="110px";
     document.getElementById("lm").style.width="110px"; 

}
function psf(){
      
             document.getElementById("ugly").src  =document.getElementById("ps").src         ;
 document.getElementById("ps").style.border="solid yellow 5px";
     document.getElementById("ps").style.height="110px";
     document.getElementById("ps").style.width="110px"; 

}
function dsf(){
      
             document.getElementById("ugly").src  =document.getElementById("ds").src         ;
 document.getElementById("ds").style.border="solid yellow 5px";
     document.getElementById("ds").style.height="110px";
     document.getElementById("ds ").style.width="110px"; 

}
function gilo()
{
     document.getElementById("gil").style.border="";
     document.getElementById("gil").style.height="100px";
     document.getElementById("gil").style.width="100px"; 


}
function rogo()
{
     document.getElementById("rog").style.border="";
     document.getElementById("rog").style.height="100px";
     document.getElementById("rog").style.width="100px"; 


}
function    kso()
{
     document.getElementById("ks").style.border="";
     document.getElementById("ks").style.height="100px";
     document.getElementById("ks").style.width="100px"; 


}
function  lho()
{
     document.getElementById("lh").style.border="";
     document.getElementById("lh").style.height="100px";
     document.getElementById("lh").style.width="100px"; 


}
function  lmo()
{
     document.getElementById("lm").style.border="";
     document.getElementById("lm").style.height="100px";
     document.getElementById("lm").style.width="100px"; 


}
function pso()
{
     document.getElementById("ps").style.border="";
     document.getElementById("ps").style.height="100px";
     document.getElementById("ps").style.width="100px"; 

}
function dso()
{
     document.getElementById("ds").style.border="";
     document.getElementById("ds").style.height="100px";
     document.getElementById("ds").style.width="100px"; 

}
function magic()
{
	 document.body.style.background="black ";
    document.getElementById("only").style.color="white";
 
}
function unmagic()
{
	 document.body.style.background="#ABF5F5";
	 document.getElementById("only").style.color="black";
}




