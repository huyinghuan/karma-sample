testBranch = (a)->
  switch a
    when 1 then 1
    when 2 then 2
    else 3

describe '测试 测试报告覆盖率', ->
  it('test branchs 1', ->
    expect(1).toEqual(testBranch(1))
  )