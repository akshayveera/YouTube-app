
import React from 'react'
import user from "../assets/header/user.png"

const commentsData = [
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [
            {
                name : "Akshay",
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                replies : [
                    {
                        name : "Akshay",
                        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                        replies : [
                            {
                                name : "Akshay",
                                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                                replies : [
                                    {
                                        name : "Akshay",
                                        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                                        replies : [
                                            {
                                                name : "Akshay",
                                                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                                                replies : [
                                        
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name : "Akshay",
                        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                        replies : [
                
                        ]
                    },

                ]
            },
            {
                name : "Akshay",
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                replies : [
        
                ]
            },
            {
                name : "Akshay",
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
                replies : [
        
                ]
            },
        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
    {
        name : "Akshay",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe quaerat, rerum aliquid qui eveniet ut. Eos eligendi ab nesciunt.",
        replies : [

        ]
    },
]

const CommentCard = ({ data }) => {
    const { name, text } = data;

    return (
    <div className="flex gap-5 bg-gray-100 p-2 rounded-lg my-3">
        <img className="h-10" src={user} alt="" />
        <div className="">
        <h2 className="font-bold">{name}</h2>
        <p>{text}</p>
        </div>
    </div>
    );
};

const CommentsList = ({comments})=>{
    
    return comments.map((comment, index) => {
        // disclaimer : don't use index as keys
        return (
            <div key={index}>
                <CommentCard data={comment}/>
                <div className='pl-5 ml-5 border-l-2 border-gray-300'>
                    {/* I got a doubt here that how does this recursion end,because there is no exit condition */}
                    <CommentsList comments={comment.replies}/>
                </div>
            </div> 
            
        )
    })

}

const CommentsContainer = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-5'>Comments </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer