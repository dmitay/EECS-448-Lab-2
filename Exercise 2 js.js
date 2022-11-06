let index = 0;
let arr = ["https://s3-eu-west-1.amazonaws.com/racingnews-v2-prod/2022/Verstappen/_1125x633_crop_center-center_85_none/SI202202230075_hires_jpeg_24bit_rgb.jpg?v=1646226405", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

function previous() 
{ 
    if (index == 0)
    {
        index = 4;
    }

    else
    {
        index = index - 1;
    }
    
    document.getElementById("imageID").src= arr[index];
} 

function next()
{
   if (index == 4)
   {
    index = 0;
   }
   else
   {
        index = index + 1;
   }

   document.getElementById("imageID").src= arr[index];
}