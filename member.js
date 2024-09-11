function skillsMember() {
  var member = this;
  member.skills = [];
  member.addSkill = function(skill) {
    member.skills.push(skill);
    return member;
  };
  return member;
}