import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
/*first*/
private name: string;
private heroBtnText: string;
private jobtitle: string;
private email: string;
private image: string;
/*second*/

private name1: string;
private heroBtnText1: string;
private jobtitle1: string;
private email1: string;
private image1: string;
/*third*/

private name2: string;
private heroBtnText2: string;
private jobtitle2: string;
private email2: string;
private image2: string;
/*fourth*/

private name3: string;
private heroBtnText3: string;
private jobtitle3: string;
private email3: string;
private image3: string;
/*fifth*/

private name4: string;
private heroBtnText4: string;
private jobtitle4: string;
private email4: string;
private image4: string; 
/*sixth*/

private name5: string;
private heroBtnText5: string;
private jobtitle5: string;
private email5: string;
private image5: string;
constructor() {

  this.name = "Keanu Reeves";
  this.heroBtnText = "more info";
  this.jobtitle = "Web developer";
  this.email = "codefactory@gmail.com";
  this.image = "https://i.amz.mshcdn.com/qKt8D-IfkSK0y4osGRFN00vdPE0=/1200x627/2013%2F01%2F04%2F60%2FWebDesign.24ce1.jpg";
  /*second*/

  this.name1 = "Sarah Levey ";
  this.heroBtnText1 = "more info";
  this.jobtitle1 = "Web developer";
  this.email1 = "codefactory@gmail.com";
  this.image1 = "http://blog.penseavanti.com.br/wp-content/uploads/2014/09/graphic-designer1.jpg"
   /*third*/

	this.name2="Daniel Arsham ";
	this.image2="https://img.nowness.com/nowness-frontend/PFTNSBWgRWuyNWmDijqv_DA1.jpg";
	this.jobtitle2="Web designer";
	this.email2 ="codefactory@gmail.com";
    /*fouth*/

	this.name3="John Malkovich ";
	this.image3="https://pmcdeadline2.files.wordpress.com/2018/01/shutterstock_8113287f-e1515730277411.jpg?w=446&h=299&crop=1";
	this.jobtitle3="Web developer";
	this.email3 ="codefactory@gmail.com";
     /*fifth*/
  
	this.name4="Sadie Williams ";
	this.image4="https://www.viaprestige-externalisation.com/wp-content/uploads/2016/01/externalisation-developpeur.jpg";
	this.jobtitle4="Web developer";
	this.email4 ="codefactory@gmail.com";
      /*sixth*/
 
	this.name5="Danny Bowien ";
	this.image5="http://applebutter.co/wp-content/uploads/web-designer-in-manchester-designers-up-north-web-design-people.jpg";
	this.jobtitle5="Web designer";
	this.email5 ="codefactory@gmail.com";

}

ngOnInit() {
}
}