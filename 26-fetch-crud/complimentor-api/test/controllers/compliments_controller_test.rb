require 'test_helper'

class ComplimentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @compliment = compliments(:one)
  end

  test "should get index" do
    get compliments_url, as: :json
    assert_response :success
  end

  test "should create compliment" do
    assert_difference('Compliment.count') do
      post compliments_url, params: { compliment: { favorited: @compliment.favorited, ffi: @compliment.ffi, hug_count: @compliment.hug_count, install: @compliment.install, title: @compliment.title } }, as: :json
    end

    assert_response 201
  end

  test "should show compliment" do
    get compliment_url(@compliment), as: :json
    assert_response :success
  end

  test "should update compliment" do
    patch compliment_url(@compliment), params: { compliment: { favorited: @compliment.favorited, ffi: @compliment.ffi, hug_count: @compliment.hug_count, install: @compliment.install, title: @compliment.title } }, as: :json
    assert_response 200
  end

  test "should destroy compliment" do
    assert_difference('Compliment.count', -1) do
      delete compliment_url(@compliment), as: :json
    end

    assert_response 204
  end
end
