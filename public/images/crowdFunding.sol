// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

contract CrowdFunding{

    ///// State variables ///////////////////
    mapping(address=>uint) contributors;
    address public admin;
    uint noOfContributors;
    uint minimumContribution;
    uint deadline;
    uint goal;
    uint raisedAmount;


    //////Request Structure/////////////
    struct Request{
        string description;
        address payable recipient;
        uint value;
        uint noOfVoters;
        bool completed;
        mapping(address => bool) voters;
    }

    ////////Storing all the request of this Fundraiser in a map///////
    mapping(uint => Request) public requests; 

    uint public numRequests;

    ////////Constructor of crowdFunding////////////////
    constructor(uint _goal, uint _deadline){
        goal = _goal;
        deadline = block.timestamp + _deadline;
        admin = msg.sender;
        minimumContribution = 100 wei;
    }

    event ContributeEvent(address _sender, uint _value);
    event createRequestEvent(string _description, address _receipient, uint _value);
    event MakePaymentEvent(address _receipient, uint _value);


    receive() payable external{
        contribute();
    }

    // to getBalance of the contract
    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function contribute() public payable{
        require(block.timestamp <= deadline, "Your contribution is too late");
        require(msg.value>=100, "Minimum value to contribute is 100");
        
        // when someone is contributing for the first time
        // increase the noOfContributors
        if(contributors[msg.sender]==0)
            noOfContributors++;
        
        contributors[msg.sender]+=msg.value;
        raisedAmount+=msg.value;

        emit ContributeEvent(msg.sender, msg.value);
    }

    function getRefund() public payable{
        require(block.timestamp > deadline && goal > raisedAmount);
        require(contributors[msg.sender] > 0);

        address payable recipient = payable(msg.sender);
        uint amount = contributors[msg.sender];

        recipient.transfer(amount);

        contributors[recipient] = 0;

    }

    modifier onlyAdmin {
        require(msg.sender == admin, "Only Admin can do this operation");
        _;
    }

    function createRequest(string memory _description, uint _value, address payable _receipient) onlyAdmin public {
        
        Request storage newRequest = requests[numRequests];
        numRequests++;


        newRequest.description = _description;
        newRequest.recipient = _receipient;
        newRequest.value = _value;
        newRequest.completed = false;
        newRequest.noOfVoters = 0;

        emit createRequestEvent(_description, _receipient, _value);

    }

    function voteRequest(uint _requestNo) public{
        require(contributors[msg.sender] > 0, "You have to contribute to vote for request");
        
        Request storage thisRequest = requests[_requestNo];

        require(thisRequest.voters[msg.sender]==false, "You have already voted");

        thisRequest.noOfVoters++;
        thisRequest.voters[msg.sender] = true;

    }

    function makePayment(uint _requestNo) public onlyAdmin{
        require(raisedAmount >= goal);
        Request storage thisRequest = requests[_requestNo];
        require(thisRequest.completed == false, "The request is completed");
        require(2*thisRequest.noOfVoters >= noOfContributors, "You didn't get the required vote");
        thisRequest.completed = true;
        thisRequest.recipient.transfer(thisRequest.value);

        emit MakePaymentEvent(thisRequest.recipient, thisRequest.value);
    }


}