import {bagmunchkingrey1, bagmunchkingrey2, bagmunchkingrey3, bagmunchkingrey4, bagmunchkingrey5, bagmunchkingrey6} from '../assets/index'
import {baggoldeneyesred1, baggoldeneyesred2, baggoldeneyesred3, baggoldeneyesred4} from '../assets/index'
import {backpackexplorerlight1, backpackexplorerlight2,  backpackexplorerlight3, backpackexplorerlight4, backpackexplorerlight5, backpackexplorerlight6} from '../assets/index'
import {phoneiphonepurple1, phoneiphonepurple2, phoneiphonepurple3} from '../assets/index'

/* import {bagmunchkingrey, baggoldeneyesred, backpackexplorerlight, phoneiphonepurple} from './assets/index' */

/* A REVOIR 
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);
    return images;
    });
}

  const bagMunchkinGreyImages = importAll(require.context('.assets/products/bags/bagmunchkingrey/', false, /\.(png|jpe?g|svg|webp)$/)); 
  const bagGoldenEyesRed = importAll(require.context('.assets/products/bags/baggoldeneyesred/', false, /\.(png|jpe?g|svg|webp)$/)); 
  */

export const PRODUCTDATA = [ 

    /* BAGS */
    {
        ref : "bagmunchkingrey",
        productName : "munchkin",
        category : "bag",
        gender : "F",
        type : "crossBody Bag",
        color : "grey",
        price : 495 ,
        stock : 10,
        creator : "Damien Poulain",
        brand : "RSVP",
        description : [
            {
                productDescription : `Surnommé ainsi en raison sa petite taille, le Munchkin est le dernier né de la gamme Golden Eyes, dont les deux bijoux argentés signature rappellent un visage.
                Il est équipé d’une poignée, et d’une bandoulière ajustable permettant de la porter en croisé ou sur l’épaule, qui s’accroche à la poignée à l’aide de deux mousquetons.
                L’aménagement intérieur est composé d’un compartiment central unique et d’une poche plaquée. Le système de fermeture est aimanté. Les bijoux sont en laiton, couverts de trois microns de palladium argenté.`,
                productEntretien : `Cuir de veau italien d'aspect miroir. Tanné au chrome. Peu sensible au rayures et aux marques du quotidien, il est facile d'entretien et se nettoie délicatement avec un chiffon doux.`
            }
        ],
        productImage : [bagmunchkingrey1, bagmunchkingrey2, bagmunchkingrey3, bagmunchkingrey4, bagmunchkingrey5, bagmunchkingrey6],
    },
    {
        ref : "baggoldeneyesred",
        productName : "Golden Eyes",
        category : "bag",
        gender : "F",
        type : "crossBody Bag",
        color : "red",
        price : 495 ,
        stock : 10,
        creator : "Damien Poulain",
        brand : "RSVP",
        description : [
            {
                productDescription : `Le Golden Eyes est le modèle iconique de la marque issu de notre première collection. Les deux bijoux dorés positionnés sur la face avant qui rappellent un visage lui valent son surnom de Golden Eyes.
                Equipée d’une bandoulière ajustable permettant de la porter en croisé ou sur l’épaule. L’aménagement intérieur est composé d’un compartiment central unique et d’une poche plaquée. Le système de fermeture est équipé d'aimants invisibles. Les bijoux et les mousquetons sont en laiton, couverts de trois microns d’or.`,
                productEntretien : `Cuir de veau d'origine France. Tanné au chrome, ce veau box tout droit venu d' Annonay est un classique de la maroquinerie.
                Initialement développé par un célèbre chausseur Français pour la fabrication de ses mocassins, ce cuir robuste à la main ferme s'est taillé la part du lion en maroquinerie. A tel point qu'il est devenu très difficile de s'en procurer. Heureusement, RSVP a ses entrées.
                Pleine fleur et peu couvert en pigments, il est sensible aux marques du quotidien, et mérite un soin particulier. Il prendra à l'usage une patine homogène qui confère au sublime. Un must indémodable, à notre humble avis.`
            }
        ],
        productImage : [baggoldeneyesred1, baggoldeneyesred2, baggoldeneyesred3, baggoldeneyesred4],
    
    },
    {
        ref : "backpackexplorerlight",
        productName : "Explorer Light Backpack Plus",
        category : "bag",
        gender : "M",
        type : "backpack",
        color : "black",
        price : 221.95 ,
        stock : 10,
        creator : "",
        brand : "Maverick & Co.",
        description : [
            {
                productDescription : `"Nothing matters to us more than turning what you asked into reality. This season, we have collected numerous ideas from the Maverick Community and gave our signature collections a full upgrade, so that they can better serve your various needs" - Maverick & Co. Designers

                Everyone loves a good upgrade, and the new Explorer Plus is bringing your everyday backpack's style and functions to the next level. From workplace essentials to gym necessities, the double main compartments and numerous pockets keep them all smartly organized. The laptop compartment is thoughtfully separated to give your 16?â‚¬? laptop extra protection. Beautifully crafted in vegan leather, the upgraded Explorer backpack is the polished daily carry that every modern elite need.`,
                productEntretien : `Microfiber vegan leather`
            }
        ],
        productImage : [backpackexplorerlight1, backpackexplorerlight2,backpackexplorerlight3, backpackexplorerlight4, backpackexplorerlight5, backpackexplorerlight6],
    
    },

    /* CLOTHES */
    {
        ref : "topclassictshirtwhite",
        productName : "Classic T-shirt",
        category : "clothes",
        gender : "UNI",
        type : "top",
        color : "white",
        price : 8.95 ,
        stock : 50,
        creator : "",
        brand : "BrandNew",
        description : [
            {
                productDescription : `Jersey T-shirt with a round neck.`,
                productEntretien : `Cotton 100%.`
            }
        ],
        productImage : [],
    
    },
    {
        ref : "sweatshirtfitsweatshirtblack",
        productName : "Fit Sweatshirt",
        category : "clothes",
        gender : "M",
        type : "sweatshirt",
        color : "BLACK",
        price : 19.99 ,
        stock : 75,
        creator : "",
        brand : "H&M",
        description : [
            {
                productDescription : `Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.`,
                productEntretien : `Cotton 100%.Cotton 60%, Polyester 40%`
            }
        ],
        productImage : [],
    
    },

    /* SHOES */
    {
        ref : "shoesairforceonemulti",
        productName : "Air Force 1 Shadow sneakers",
        category : "shoes",
        gender : "F",
        type : "sneackers",
        color : "multi",
        price : 330.95 ,
        stock : 120,
        creator : "",
        brand : "Nike",
        description : [
            {
                productDescription : `The perfect sweet statement. These Air Force 1 Shadow sneakers from Nike are crafted from pastel panels of leather for a delicate and subtle finish. The idea pair.`,
                productEntretien : `Sole: Rubber 100% | Outer: Leather 100% | Lining: Polyamide 100%`
            }
        ],
        productImage : [],
    
    },
    {
        ref : "shoesairjordanonemidlightsmokegrey",
        productName : "Explorer Light Backpack Plus",
        category : "shoes",
        gender : "M",
        type : "sneackers",
        color : "grey",
        price : 251 ,
        stock : 5,
        creator : "",
        brand : "Nike",
        description : [
            {
                productDescription : `"The Air Jordan 1 Mid is getting ready for the chillier months ahead. Its latest edition is the Air Jordan 1 Mid Smoke Grey Black sporting a winter colourway.

                The toe cap, eye stays, collar flaps and heel counter are all in a buttery Smoke Grey leather. The base of the upper is a clean white leather peeping out of the toe box and mid-quarter panel. A pitch-black Swoosh is a striking contrast to the white mid-quarter panel. This black is repeated on the collar, the tongue, and the sock liner. The midsole is white while the outsole is a Smoke Grey, giving this pair an overall greyscale look. A white Wings logo is embossed on the Smoke Grey collar flap and white Jumpman is featured on the Smoke Grey tongue tab.`,
                productEntretien : `Sole: Rubber 100% | Outer: Leather 100% | Lining: Fabric 100%`
            }
        ],
        productImage : [],
    
    },

    /* TECH */
    {
        ref : "phoneiphonepurple",
        productName : "Iphone",
        category : "tech",
        gender : "UNI",
        type : "phone",
        color : "purple",
        price : 1005 ,
        stock : 100,
        creator : "Apple",
        brand : "Apple",
        description : [
            {
                productDescription : `The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).`,
                productEntretien : ""
            }
        ],
        productImage : [phoneiphonepurple1, phoneiphonepurple2, phoneiphonepurple3],
    },


]