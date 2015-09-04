class PostsController < ApplicationController
  def index
    if params[:query]
      @posts = Post.search(params[:query])
    else
      @posts = Post.all
    end
    render json: @posts
  end

  def popular
    @popular_posts = Post.limit(3).order(:author)
    render json: @popular_posts
  end

  def recent
    @recent_posts = Post.limit(3).order(:created_at)
    render json: @recent_posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: 200
    else
      render json: "error!"
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post, status: 200
    else
      render json: "error!"
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: "success"
  end

  private
  def post_params
    params.require(:post).permit(:author, :photo_url, :category_list)
  end
end
