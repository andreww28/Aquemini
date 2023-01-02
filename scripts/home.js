
//ANIMATE ON SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else {
            entry.target.classList.remove("active");
        }
    });
  });
  
  
  const observe_all_elements = (nodes) => {
    nodes.forEach(node => {
        var elements = document.querySelectorAll(node);
  
        elements.forEach(element => {
            observer.observe(element);
        });
    })
  }
  
  observe_all_elements(['.fade-in', 'button', '.to-bot', '.people']);