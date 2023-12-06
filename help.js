
// Select the p1 element by its id
var paragraphElement = document.getElementById("paragraph");

// Set the content of the paragraph
paragraphElement.textContent = `
Founded in 2014, the HELP Foundation is a non-profit organization headquartered in Amravati, Maharashtra, India, with a noble mission to provide emergency aid to animals in distress. Over the past nine years, our dedicated team has been actively involved in rescue and rehabilitation efforts, extending assistance to thousands of animals spanning over 200+ different species.

Our work extends beyond animal welfare, contributing to enhanced public health and safety outcomes. We are also deeply committed to mitigating human-animal conflicts across diverse ecosystems.

Powered by a passionate and skilled team, we are resolutely working towards our vision of promoting conservation and fostering coexistence among wildlife, communities, and their animals. We achieve this through our comprehensive approach, encompassing both response and prevention strategies, all aimed at creating a harmonious balance between wildlife and human society.
`;

const galleryData = [
  {
    imageUrl: 'https://img.apmcdn.org/67a67513f9d731846f30f3ce76b6532721cc3411/widescreen/63823f-20190128-a-beautiful-world-animal-rescue-01.jpg',
    caption: `
      Once upon a time in a small, picturesque village nestled between rolling hills and lush forests, there lived a group of compassionate individuals who shared an unbreakable bond with the animal kingdom. They were known as the "Guardians of Grace." These devoted individuals had made it their life's mission to rescue and rehabilitate animals in need, ensuring that every creature, no matter how big or small, had a chance at a better life.

      One sunny morning, as the Guardians of Grace went about their daily routines, they received a distress call from a nearby forest. A local hiker had stumbled upon a hidden cave and heard faint cries echoing from within. Without hesitation, the Guardians sprang into action, gathering their tools and setting off on a mission to save the mysterious creatures trapped in the depths of the cave.

      Upon reaching the cave's entrance, the Guardians cautiously descended into its depths, armed with lanterns to light their way. As they ventured further, the cries grew louder, leading them to a chamber where they discovered a family of foxes. A landslide had sealed the entrance, leaving the vixen and her adorable pups trapped and unable to escape.

      The Guardians worked tirelessly, carefully removing the debris and creating a pathway for the fox family to crawl out. It was a painstaking process, requiring delicate precision to avoid causing harm to the trapped animals. Hour after hour, they dug, lifted, and cleared until finally, a small opening emerged, allowing the vixen to squeeze through.

      The heartwarming moment came when the vixen emerged into the open air, her eyes wide with gratitude and relief. She quickly scampered away, only to return moments later with her playful pups in tow. The Guardians watched in awe as the fox family rejoiced in their newfound freedom, chasing each other through the tall grass and basking in the warm sunlight.

      The rescue mission didn't end with the foxes, though. The Guardians took the opportunity to explore the cave further and stumbled upon a colony of bats that had been trapped as well. With the same dedication and care, they fashioned tiny makeshift ramps for the bats to crawl up, ensuring their safe return to the outside world.
    `,
  },
  { imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', caption: 'Caption for Image 2' },
  { imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', caption: 'Caption for Image 1' },
  { imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', caption: 'Caption for Image 2' }, 
  // Add more image data as needed
 // Add more objects with image URLs and captions here...
];


// Function to create image elements and add them to the gallery
function createImageGallery() {
  const gallerySection = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');

  for (let i = 0; i < galleryData.length; i++) {
    const image = document.createElement('img');
    image.src = galleryData[i].imageUrl;
    image.alt = galleryData[i].caption;

    image.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImage.src = galleryData[i].imageUrl;
      modalCaption.textContent = galleryData[i].caption;
    });

    // Add 'loaded' class to the image wenh it finishes loading
    image.onload = () => {
      image.classList.add('loaded');
    }; 

    gallerySection.appendChild(image);
  }

  const closeButton = document.getElementsByClassName('close')[0];
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', createImageGallery);
