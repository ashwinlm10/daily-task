function checkVotingEligibility(age) {
    if(age > 18){
        return 'eligible to vote'
    }else{
        return 'not eligible to vote'
    }
}
console.log(checkVotingEligibility(1));


