
var nameList = [
    "Vivek Kumar", "Amit Patel", "Priya Sharma","Rahul Gupta","Sneha Singh","Rajesh Kumar",  "Neha Chawla","Vikram Verma","Anjali Desai",
    "Ravi Menon","Meera Iyer","Sanjay Malhotra","Divya Shah", "Alok Sharma", "Sunita Reddy", "Rajiv Joshi", "Swati Mehta",
    "Vishal Bhatia", "Kavita Kapoor", "Arun Khanna", "Shilpa Seth", "Rohan Mehta", "Pooja Srinivasan", "Amitabh Trivedi",
    "Rina Patel", "Rajeshwari Nair", "Aryan Singh", "Nisha Iyer", "Varun Choudhary", "Sarita Menon", "Avinash Gupta",
    "Ananya Kumar", "Deepak Shah", "Anita Krishnan", "Sandeep Nair", "Tanvi Sharma",  "Aditya Verma", "Jyoti Chauhan",
    "Raj Kapoor", "Neha Dubey", "Arjun Reddy", "Shalini Rathi", "Vivek Agarwal", "Sonia Patel", "Amita Rao", "Kunal Iyer",
    "Nidhi Kumar", "Prakash Raj", "Asha Singh", "Vinay Kapoor", "Ritu Sharma", "Ramesh Nair", "Aarti Jain", "Rajeev Khanna",
    "Suman Gupta", "Rohini Menon", "Amar Kumar", "Sheela Deshmukh", "Rahul Saxena", "Anita Bajaj", "Rohit Chawla", "Anu Mehra",
    "Vijay Verma", "Reena Patel", "Arvind Nair", "Anushka Shah", "Rajendra Mehta", "Shivani Iyer", "Manish Kapoor", "Juhi Sharma",
    "Alok Gupta", "Poonam Joshi", "Harish Reddy", "Neha Choudhary"
  ]

var youtubeComment = [
    "Awesome!",
    "So helpful!",
    "Love this!",
    "Great info!",
    "Wow!",
    "Incredible!",
    "Amazing content!",
    "Keep it up!",
    "Impressive!",
    "Loving it!",
    "You rock!",
    "So informative!",
    "Brilliant!",
    "Thank you!",
    "Mind blown!",
    "Superb!",
    "Nice work!",
    "You're the best!",
    "Exactly what I needed!",
    "So true!",
    "Wow, I learned a lot!",
    "Thank you for sharing!",
    "This is gold!",
    "I'm hooked!",
    "Can't get enough!",
    "You're a genius!",
    "My favorite channel!",
    "This is fantastic!",
    "Spot on!",
    "Thumbs up!",
    "You're a lifesaver!",
    "You make it simple!",
    "Keep them coming!",
    "You're amazing!",
    "This is pure gold!",
    "Mind-blowing stuff!",
    "A game-changer!",
    "Thanks a bunch!",
    "You're so talented!",
    "This is top-notch!",
    "Impressed as always!",
    "You're a legend!",
    "Short and sweet, love it!",
    "You're a superstar!",
    "Always on point!",
    "This is fire!",
    "You're a master!",
    "Absolutely awesome!",
    "You're a pro!",
    "Love your work!",
    "Can't believe I didn't know this!",
    "So glad I found your channel!",
    "You're a wizard!",
    "I'm a fan!",
    "This made my day!",
    "You're my go-to source!",
    "So valuable!",
    "This deserves a million views!",
    "You're a genius!",
    "Mind officially blown!",
    "You're a legend!",
    "This is pure gold!",
    "You're the best!",
    "Unbelievably good!",
    "This is a masterpiece!",
    "You're a lifesaver!",
    "You're killing it!",
    "This is top-tier content!",
    "You're an inspiration!",
    "This is golden advice!",
    "You're a content wizard!",
    "This is exactly what I needed!",
    "You're a rockstar!",
    "This is beyond awesome!",
    "You're a true educator!",
    "This is the good stuff!",
    "You're making learning fun!",
    "This is game-changing!",
    "You're a true expert!",
    "This is the real deal!",
    "You're a blessing!",
    "This is incredible!",
    "You're a treasure of knowledge!",
    "This is spot on!",
    "You're a hero!",
    "This is golden content!",
    "You're on fire!",
    "This is a gem!",
    "You're a guru!",
    "This is mind-blowing!",
    "You're a legend in the making!",
    "This is perfection!",
    "You're a magician!",
    "This is pure genius!",
    "You're a role model!",
    "This is excellence!",
    "You're a game-changer!",
    "This is legendary!",
    "You're a mastermind!",
    "This is a revelation!",
    "You're a true gem!",
    "This is gold dust!"
  ]

const emojis = [
  "😀", "😍", "👍", "🔥", "🙌", "😎", "🤩", "💯", "👏", "❤️",
  "😄", "👌", "😊", "💪", "👀", "🚀", "👊", "😉", "🎉", "🤗"
];

export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];      
}; 

export function generateRandomMessage(){
    const randomComment = youtubeComment[Math.floor(Math.random() * youtubeComment.length)];  
     const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
     return `${randomComment} ${randomEmoji}`;    
}


export function nthPrime(n) {
    let P = 0;

    function isPrime(x) {
        let isPrime= true;
        
        if(x===1)
        {
            return false;
        }

        for (let d = 2; d <= Math.sqrt(x); d++) {
            if((x/d) % 1 === 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    for (let i = 1; 0 < n; i++) {
        

        if(isPrime(i)) {
            P = i; n--;
        }

        // we can skip the even numbers
        if(3 <= i){
            i++;
        }

    }

    return P;
}

export function convertCounts(count)
{
    if(count > 1000000)
    {
        let views = parseInt(count)/1000000;
        return views.toFixed(1) + "M";
    }
    else if(count > 1000)
    {
        let views = parseInt(count)/1000;
        return views.toFixed(1) + "K";
    }
    
    return count;
}

export function getApproxTime(publishedTime) {
    // Convert published time to Date object
    const publishedDate = new Date(publishedTime);
  
    // Get the current time
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - publishedDate;
  
    // Convert milliseconds to seconds
    const seconds = Math.floor(timeDifference / 1000);
  
    // Convert seconds to minutes
    const minutes = Math.floor(seconds / 60);
  
    // Convert minutes to hours
    const hours = Math.floor(minutes / 60);
  
    // Convert hours to days
    const days = Math.floor(hours / 24);
  
    // Convert days to years
    const years = Math.floor(days / 365);
  
    // Return the approximate time difference
    if (years > 0) {
      return years + (years === 1 ? ' year ago' : ' years ago');
    } else if (days > 0) {
      return days + (days === 1 ? ' day ago' : ' days ago');
    } else if (hours > 0) {
      return hours + (hours === 1 ? ' hour ago' : ' hours ago');
    } else if (minutes > 0) {
      return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago');
    } else {
      return seconds + (seconds === 1 ? ' second ago' : ' seconds ago');
    }
  }


  export function getFirstThreeWords(inputString) {
    // Remove special characters using regex
    const cleanedString = inputString.replace(/[^\w\s]/gi, '');
  
    // Split the cleaned string into an array of words
    const words = cleanedString.split(/\s+/);
  
    // Return the first three words or less if the string has fewer than three words
    return words.slice(0, 3).join(' ');
  }
