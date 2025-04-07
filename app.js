
function showQuote() {
    const quote = document.getElementById('quote');
    quote.textContent = `"การไม่ยอมแพ้คือกุญแจของความสำเร็จ"`;
  }
  
  
  function changeQuoteColor() {
    const quote = document.getElementById('quote');
    quote.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
 
  function switchToContact() {
    const quote = document.getElementById('quote');
    quote.textContent = 'โทร: 090-xxxxxxx | อีเมล: tuan@example.com';
    quote.style.color = '#00ffd5';
  }
  
  
  function showMeme() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
  
    
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }
 