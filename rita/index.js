const RAVEN = `
THE RAVEN.


ONCE upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore,
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
"'Tis some visiter," I muttered, "tapping at my chamber door—
Only this, and nothing more."


Ah, distinctly I remember it was in the bleak December,
And each separate dying ember wrought its ghost upon the floor.
Eagerly I wished the morrow;—vainly I had sought to borrow
From my books surcease of sorrow—sorrow for the lost Lenore—
For the rare and radiant maiden whom the angels name Lenore—
Nameless here for evermore.


And the silken sad uncertain rustling of each purple curtain
Thrilled me—filled me with fantastic terrors never felt before;
So that now, to still the beating of my heart, I stood repeating
"'Tis some visiter entreating entrance at my chamber door—
Some late visiter entreating entrance at my chamber door;—
This it is, and nothing more."


Presently my soul grew stronger; hesitating then no longer,
"Sir," said I, "or Madam, truly your forgiveness I implore;
But the fact is I was napping, and so gently you came rapping,
And so faintly you came tapping, tapping at my chamber door,
That I scarce was sure I heard you"—here I opened wide the door;——
Darkness there, and nothing more.


Deep into that darkness peering, long I stood there wondering, fearing,
Doubting, dreaming dreams no mortal ever dared to dream before;
But the silence was unbroken, and the darkness gave no token,
And the only word there spoken was the whispered word, "Lenore!"
This I whispered, and an echo murmured back the word, "Lenore!"
Merely this, and nothing more.


Back into the chamber turning, all my soul within me burning,
Soon I heard again a tapping somewhat louder than before.
"Surely," said I, "surely that is something at my window lattice;
Let me see, then, what thereat is, and this mystery explore—
Let my heart be still a moment and this mystery explore;—
'Tis the wind and nothing more!"


Open here I flung the shutter, when, with many a flirt and flutter,
In there stepped a stately raven of the saintly days of yore;
Not the least obeisance made he; not an instant stopped or stayed he;
But, with mien of lord or lady, perched above my chamber door—
Perched upon a bust of Pallas just above my chamber door—
Perched, and sat, and nothing more.


Then this ebony bird beguiling my sad fancy into smiling,
By the grave and stern decorum of the countenance it wore,
"Though thy crest be shorn and shaven, thou," I said, "art sure no craven,
Ghastly grim and ancient raven wandering from the Nightly shore—
Tell me what thy lordly name is on the Night's Plutonian shore!"
Quoth the raven, "Nevermore."


Much I marvelled this ungainly fowl to hear discourse so plainly,
Though its answer little meaning—little relevancy bore;
For we cannot help agreeing that no living human being
Ever yet was blessed with seeing bird above his chamber door—
Bird or beast upon the sculptured bust above his chamber door,
With such name as "Nevermore."


But the raven, sitting lonely on the placid bust, spoke only
That one word, as if his soul in that one word he did outpour.
Nothing farther then he uttered—not a feather then he fluttered—
Till I scarcely more than muttered "Other friends have flown before—
On the morrow he will leave me, as my hopes have flown before."
Then the bird said "Nevermore."


Startled at the stillness broken by reply so aptly spoken,
"Doubtless," said I, "what it utters is its only stock and store
Caught from some unhappy master whom unmerciful Disaster
Followed fast and followed faster till his songs one burden bore—
Till the dirges of his Hope that melancholy burden bore
Of 'Never—nevermore.'"


But the raven still beguiling all my sad soul into smiling,
Straight I wheeled a cushioned seat in front of bird, and bust and door;
Then, upon the velvet sinking, I betook myself to linking
Fancy unto fancy, thinking what this ominous bird of yore—
What this grim, ungainly, ghastly, gaunt, and ominous bird of yore
Meant in croaking "Nevermore."


This I sat engaged in guessing, but no syllable expressing
To the fowl whose fiery eyes now burned into my bosom's core;
This and more I sat divining, with my head at ease reclining
On the cushion's velvet lining that the lamplight gloated o'er,
But whose velvet violet lining with the lamplight gloating o'er,
She shall press, ah, nevermore!


Then, methought, the air grew denser, perfumed from an unseen censer
Swung by angels whose faint foot-falls tinkled on the tufted floor.
"Wretch," I cried, "thy God hath lent thee—by these angels he hath sent thee
Respite—respite and nepenthe from thy memories of Lenore!
Quaff, oh quaff this kind nepenthe and forget this lost Lenore!"
Quoth the raven, "Nevermore."


"Prophet!" said I, "thing of evil!—prophet still, if bird or devil!—
Whether Tempter sent, or whether tempest tossed thee here ashore,
Desolate yet all undaunted, on this desert land enchanted—
On this home by Horror haunted—tell me truly, I implore—
Is there—is there balm in Gilead?—tell me—tell me, I implore!"
Quoth the raven, "Nevermore."


"Prophet!" said I, "thing of evil—prophet still, if bird or devil!
By that Heaven that bends above us—by that God we both adore—
Tell this soul with sorrow laden if, within the distant Aidenn,
It shall clasp a sainted maiden whom the angels name Lenore—
Clasp a rare and radiant maiden whom the angels name Lenore."
Quoth the raven, "Nevermore."


"Be that word our sign of parting, bird or fiend!" I shrieked, upstarting—
"Get thee back into the tempest and the Night's Plutonian shore!
Leave no black plume as a token of that lie thy soul hath spoken!
Leave my loneliness unbroken!—quit the bust above my door!
Take thy beak from out my heart, and take thy form from off my door!"
Quoth the raven, "Nevermore."


And the raven, never flitting, still is sitting, still is sitting
On the pallid bust of Pallas just above my chamber door;
And his eyes have all the seeming of a demon's that is dreaming,
And the lamp-light o'er him streaming throws his shadow on the floor;
And my soul from out that shadow that lies floating on the floor
Shall be lifted—nevermore!
`
let x, y, font, words, title

function setup() {
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";

  createCanvas(windowWidth, windowHeight);
  background('black')
  textSize(20);
  fill('white')
  noStroke();
  // x = random(width);
  // y = random(height);
  // textFont("monospace", 64);
  angleMode(DEGREES);

  words = RiTa.tokenize(RAVEN)

  // replace all nouns with random nouns
  words.forEach((word, i) => RiTa.isNoun(word) ?
    words[i] = RiTa.randomWord({ pos: "n" }) : words[i] = word)

  // replace all adjectives with random nouns
  words.forEach((word, i) => RiTa.isAdjective(word) ?
    words[i] = RiTa.randomWord({ pos: "a" }) : words[i] = word)

  // remove space
  words.forEach((word, i) => word === '\n' && words.splice(i, 1))
  // in this case we have to scan the new array again to remove space
  words.forEach((word, i) => word === '\n' && words.splice(i, 1))

  // join together all the tokens in our array
  title = [words[0], words[1], words[2]]
  words.splice(0, 3) // remove the title
  // str = words.join(' ')
}

function draw() {
  textFont("monospace", 94);
  push()
  fill('white')
  text(
    title.join(' '), (width / 2) - textWidth(title.join(' ')) / 2, height / 2)
  pop()

  rect(0, 0, width / 4, height)

  rect(width - width / 4, 0, width / 4, height)
  textFont("monospace", 6);

  words.forEach(str => {
    push()
      // fill(255)
      // set the fill for the text
    fill(0)
    text(str, random(width), random(height));
      // If the head of the text has started to go off screen,
      // draw a second copy behind it by 50 pixels
      if (x < 0) {
        text(str, x + textWidth(str) + 50, y);
      }

      // if the first copy of the text is completely offscreen, set x to be
      // at the current location of the second copy
      if (x <= -textWidth(str)) {
        x = x + textWidth(str) + 50;
      }

      // Draw the text
      text(str, x, y);
      // move the position one to the left
      x--;
    drawRAVEN(
      fill(255),
      fill(0),
      word
    )
    pop()
  })
  rect(width, 0, width / 4, height)
  // frameRate(1)
}

function drawRAVEN(backgroundColor, textColor, str) {
  // draw a full screen partially opaque white rectangle for the blur
  textColor
  // set the fill for the text
  backgroundColor
  // If the head of the text has started to go off screen,
  // draw a second copy behind it by 50 pixels
  if (x < 0) {
    text(str, x + textWidth(str) + random(width), y);
  }

  // if the first copy of the text is completely offscreen, set x to be
  // at the current location of the second copy
  if (x <= -textWidth(str)) {
    x = x + textWidth(str) + random(width);
  }

  // Draw the text
  text(str, x, y);
  // move the position one to the left
  x--;
}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}
